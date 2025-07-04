import express from "express";
import multer from "multer";
import { register, login, validateToken, resetPassword } from "../controller/auth.controller.js";

const router = express.Router();

// multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
});

const upload = multer({ storage });

router.post("/register", upload.single("profileImage"), register);
router.post("/login", login);
router.post("/validate-token", validateToken);
router.post("/reset-password", resetPassword);

export default router;