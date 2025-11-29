const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    course: { type: String },
    yearOfStudy: { type: String },
    residence: { type: String },
    isBaptized: { type: Boolean, default: false },
    ministriesInterested: [{ type: String }],
  },
  { timestamps: true }
);

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
