const mongoose = require("mongoose");

const nominationSchema = new mongoose.Schema(
  {
    nomineeName: { type: String, required: true },
    nomineeEmail: { type: String },
    position: { type: String, required: true },
    reason: { type: String },
  },
  { timestamps: true }
);

const Nomination = mongoose.model("Nomination", nominationSchema);

module.exports = Nomination;
