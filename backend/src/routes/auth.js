const express = require("express");
const jwt = require("jsonwebtoken");
const AdminUser = require("../models/AdminUser");

const router = express.Router();

// One-time admin creation helper
router.post("/register", async (req, res) => {
  try {
    const { email, password, secret } = req.body;

    if (secret !== process.env.ADMIN_SETUP_SECRET) {
      return res.status(403).json({ message: "Forbidden" });
    }

    const existing = await AdminUser.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const passwordHash = await AdminUser.hashPassword(password);
    const user = await AdminUser.create({ email, passwordHash });

    return res.status(201).json({ id: user._id, email: user.email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await AdminUser.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const ok = await admin.comparePassword(password);
    if (!ok) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token, email: admin.email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
