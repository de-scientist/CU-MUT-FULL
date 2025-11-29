const mongoose = require("mongoose");

const ministryApplicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    ministry: { type: String, required: true },
    message: { type: String },
    experience: { type: String },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const MinistryApplication = mongoose.model(
  "MinistryApplication",
  ministryApplicationSchema
);

module.exports = MinistryApplication;
