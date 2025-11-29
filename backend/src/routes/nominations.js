const express = require("express");
const Nomination = require("../models/Nomination");
const auth = require("../middleware/auth");

const router = express.Router();

// Public: submit nomination
router.post("/", async (req, res) => {
  try {
    const nomination = await Nomination.create(req.body);
    res.status(201).json(nomination);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Invalid data" });
  }
});

// Admin: list all nominations
router.get("/", auth, async (req, res) => {
  const nominations = await Nomination.find().sort({ createdAt: -1 });
  res.json(nominations);
});

// Admin: update nomination
router.put("/:id", auth, async (req, res) => {
  try {
    const nomination = await Nomination.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(nomination);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Invalid data" });
  }
});

// Admin: delete nomination
router.delete("/:id", auth, async (req, res) => {
  await Nomination.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
