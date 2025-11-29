const express = require("express");
const MinistryApplication = require("../models/MinistryApplication");
const auth = require("../middleware/auth");
const {
  ministryApplicationCreateSchema,
  ministryApplicationStatusSchema,
} = require("../validation/ministryApplicationSchemas");

const router = express.Router();

// Public: submit application
router.post("/", async (req, res) => {
  try {
    const parsed = ministryApplicationCreateSchema.parse(req.body);
    const app = await MinistryApplication.create(parsed);
    res.status(201).json(app);
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

// Admin: list
router.get("/", auth, async (req, res) => {
  const apps = await MinistryApplication.find().sort({ createdAt: -1 });
  res.json(apps);
});

// Admin: update status
router.patch("/:id/status", auth, async (req, res) => {
  try {
    const parsed = ministryApplicationStatusSchema.parse(req.body);
    const app = await MinistryApplication.findByIdAndUpdate(
      req.params.id,
      { status: parsed.status },
      { new: true }
    );
    res.json(app);
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

module.exports = router;
