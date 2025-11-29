const express = require("express");
const Evaluation = require("../models/Evaluation");
const auth = require("../middleware/auth");

const router = express.Router();

// Public: submit evaluation
router.post("/", async (req, res) => {
  try {
    const evalDoc = await Evaluation.create(req.body);
    res.status(201).json(evalDoc);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Invalid data" });
  }
});

// Admin: list all evaluations
router.get("/", auth, async (req, res) => {
  const evals = await Evaluation.find().sort({ createdAt: -1 });
  res.json(evals);
});

// Admin: update evaluation
router.put("/:id", auth, async (req, res) => {
  try {
    const evalDoc = await Evaluation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(evalDoc);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Invalid data" });
  }
});

// Admin: delete evaluation
router.delete("/:id", auth, async (req, res) => {
  await Evaluation.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
