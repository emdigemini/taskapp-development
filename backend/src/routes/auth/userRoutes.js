import auth from "../../middleware/auth.js";
import express from "express";

const router = express.Router();

router.get("/home", auth, (req, res) => {
  res.json({message: "Welcome to dashboard", userId: req.user.id});
});

export default router;