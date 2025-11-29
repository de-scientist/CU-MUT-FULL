const express = require("express");
const Program = require("../models/Program");
const auth = require("../middleware/auth");

const router = express.Router();

// All program endpoints require admin auth
router.use(auth);

// List programs
router.get("/", async (req, res) => {
  const programs = await Program.find().sort({ date: -1 });
  res.json(programs);
});

// Get single program
router.get("/:id", async (req, res) => {
  const program = await Program.findById(req.params.id);
  if (!program) return res.status(404).json({ message: "Not found" });
  res.json(program);
});

// Create program
router.post("/", async (req, res) => {
  try {
    const program = await Program.create(req.body);
    res.status(201).json(program);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Invalid data" });
  }
});

// Update program
router.put("/:id", async (req, res) => {
  try {
    const program = await Program.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(program);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Invalid data" });
  }
});

// Delete program
router.delete("/:id", async (req, res) => {
  await Program.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
