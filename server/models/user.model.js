const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Define the User Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["customer", "staff", "admin"], 
      default: "customer",
    },
    profilePicture: {
      type: String,
      default: "default-profile.png",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Pre-save Hook: Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to verify password
userSchema.methods.verifyPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Export the User Model
module.exports = mongoose.model("User", userSchema);