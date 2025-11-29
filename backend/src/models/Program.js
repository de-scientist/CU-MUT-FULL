const mongoose = require("mongoose");

const programSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: Date, required: true },
    items: [
      {
        time: String,
        activity: String,
        leader: String,
      },
    ],
  },
  { timestamps: true }
);

const Program = mongoose.model("Program", programSchema);

module.exports = Program;
