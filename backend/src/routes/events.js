const express = require("express");
const Event = require("../models/Event");
const auth = require("../middleware/auth");
const {
  eventCreateSchema,
  eventUpdateSchema,
} = require("../validation/eventSchemas");

const router = express.Router();

// Public: list events
router.get("/", async (req, res) => {
  const events = await Event.find().sort({ createdAt: -1 });
  res.json(events);
});

// Admin: create
router.post("/", auth, async (req, res) => {
  try {
    const parsed = eventCreateSchema.parse(req.body);
    const event = await Event.create(parsed);
    res.status(201).json(event);
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

// Admin: update
router.put("/:id", auth, async (req, res) => {
  try {
    const parsed = eventUpdateSchema.parse(req.body);
    const event = await Event.findByIdAndUpdate(req.params.id, parsed, {
      new: true,
    });
    res.json(event);
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

// Admin: delete
router.delete("/:id", auth, async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
