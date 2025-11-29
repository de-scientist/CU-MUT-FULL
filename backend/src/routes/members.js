const express = require("express");
const Member = require("../models/Member");
const auth = require("../middleware/auth");
const { memberCreateSchema } = require("../validation/memberSchemas");

const router = express.Router();

// Public: register member
router.post("/", async (req, res) => {
  try {
    const parsed = memberCreateSchema.parse(req.body);
    const existing = await Member.findOne({ email: parsed.email });
    if (existing) {
      return res
        .status(409)
        .json({ message: "A member with this email already exists" });
    }
    const member = await Member.create(parsed);
    res.status(201).json(member);
  } catch (err) {
    if (err.name === "ZodError") {
      return res.status(400).json({
        message: "Validation error",
        errors: err.errors,
      });
    }
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Admin: list members
router.get("/", auth, async (req, res) => {
  const members = await Member.find().sort({ createdAt: -1 });
  res.json(members);
});

// Admin: gender stats
router.get("/stats/gender", auth, async (req, res) => {
  const agg = await Member.aggregate([
    {
      $group: {
        _id: "$gender",
        count: { $sum: 1 },
      },
    },
  ]);

  const stats = { male: 0, female: 0, other: 0 };
  agg.forEach((item) => {
    if (item._id && stats[item._id] !== undefined) {
      stats[item._id] = item.count;
    }
  });

  res.json(stats);
});

module.exports = router;
