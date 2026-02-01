import User from "../../models/auth/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if(!username || !password)
      return res.status(400).json({message: "All fields are required!"});

    const user = await User.findOne({ username });

    if(!user)
      return res.status(400).json({message: "Invalid username"});

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch)
      return res.status(400).json({message: "Invalid password"});

    const token = jwt.sign(
      {id: user._id},
      process.env.JWT_SECRET,
      {expiresIn: process.env.JWT_EXPIRES_IN || "1d"}
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // set true when deploy
      sameSite: "strict", // anti CSRF
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    })

    res.status(200).json({
      message: "Login successfully",
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
};

export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "strict",
      secure: false // true pag HTTPS
    });

    res.json({ message: "Logged out" });
  } catch (err) {
    console.log("Error in logoutUser controller");
    res.status(500).json({message: "Internal server error"});
  }
};