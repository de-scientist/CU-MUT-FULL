const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: {
      type: String,
      enum: ["devotional", "sermon", "guide"],
      default: "devotional",
    },
    link: { type: String, default: "" },
  },
  { timestamps: true }
);

const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;
