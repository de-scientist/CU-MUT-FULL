const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema(
  {
    type: { type: String, default: "service" },
    targetId: { type: String },
    rating: { type: Number, min: 1, max: 5 },
    comments: { type: String },
  },
  { timestamps: true }
);

const Evaluation = mongoose.model("Evaluation", evaluationSchema);

module.exports = Evaluation;
