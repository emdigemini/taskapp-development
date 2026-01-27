import User from "../../models/auth/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if(!user)
      return res.status(400).json({message: "Invalid credentials"});

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch)
      return res.status(400).json({message: "Invalid credentials"});

    const token = jwt.sign(
      {id: user._id},
      process.env.JWT_SECRET,
      {expiresIn: process.env.JWT_EXPIRES_IN || "24hr"}
    )

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    })
  } catch (err) {
    console.log("Error in loginUser controller", err);
    res.status(500).json({message: "Internal server error"});
  }
}