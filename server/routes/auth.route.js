const express = require("express");
const { register, login, validateToken, resetPassword } = require("../controller/auth.controller");
const router = express.Router();

// Route for user registration
router.post("/register", register);

// Route for user login
router.post("/login", login);

// Route for token validation
router.get("/validate-token", validateToken);

// Route for password reset
router.post("/reset-password", resetPassword);

module.exports = router;