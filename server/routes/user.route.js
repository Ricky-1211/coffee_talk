const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  deleteUser,
  listUsers,
  resetPassword
} = require("../controller/user.controller");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getUserProfile);
router.put("/profile", updateUserProfile);
router.delete("/profile", deleteUser);
router.get("/list", listUsers);
router.post("/reset-password", resetPassword);

module.exports = router;