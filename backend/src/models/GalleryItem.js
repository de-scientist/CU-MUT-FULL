const mongoose = require("mongoose");

const galleryItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, default: "general" },
  },
  { timestamps: true }
);

const GalleryItem = mongoose.model("GalleryItem", galleryItemSchema);

module.exports = GalleryItem;
