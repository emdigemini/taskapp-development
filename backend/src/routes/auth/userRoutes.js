import authentication from "../../middleware/authentication.js";
import express from "express";
import User from "../../models/auth/User.js";

const router = express.Router();

router.get("/users/me", authentication, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if(!user) return res.status(404).json({message: "User not found"});
    res.status(200).json({message: "Welcome to dashboard", userId: user._id});
  } catch (err) {
    console.err(err);
    res.status(500).json({messgae: "Server error"});
  }
});

export default router;