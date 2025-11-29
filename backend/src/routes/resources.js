const express = require("express");
const Resource = require("../models/Resource");
const auth = require("../middleware/auth");

const router = express.Router();

// Public
router.get("/", async (req, res) => {
  const items = await Resource.find().sort({ createdAt: -1 });
  res.json(items);
});

// Admin
router.post("/", auth, async (req, res) => {
  try {
    const item = await Resource.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Invalid data" });
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    const item = await Resource.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Invalid data" });
  }
});

router.delete("/:id", auth, async (req, res) => {
  await Resource.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
