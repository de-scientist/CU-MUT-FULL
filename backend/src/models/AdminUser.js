const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminUserSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true }
);

adminUserSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.passwordHash);
};

adminUserSchema.statics.hashPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const AdminUser = mongoose.model("AdminUser", adminUserSchema);

module.exports = AdminUser;
