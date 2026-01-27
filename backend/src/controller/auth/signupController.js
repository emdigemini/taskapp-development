import User from "../../models/auth/User.js";
import validator from "validator";
import bcrypt from "bcrypt";

export const getUser = async(_, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    console.warn("Error in createUser controller", err);
    res.status(500).json({message: "Internal server error."});
  }
} 

export const createUser = async (req, res) => {
  try {
    let { username, email, password, confirmPassword } = req.body;

    username = username?.trim().toLowerCase();
    email = email?.trim().toLowerCase();

    if(!username || !email || !password || !confirmPassword)
      return res.status(400).json({message: "All fields are required!"});

    if(!validator.isEmail(email))
      return res.status(400).json({message: "Invalid email format!"});

    if(password !== confirmPassword){
      return res.status(400).json({message: "Password and Confirm Password should be the same"});
    }
    
    if(password.length < 8)
      return res.status(400).json({message: "Password must be at least 8 characters"});

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if(existingUser){
      if(existingUser.email === email)
        return res.status(400).json({message: "Email already exists"});
      if(existingUser.username === username)
        return res.status(400).json({message: "Username already exists"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ username, email, password: hashedPassword });
    
    res.status(201).json({
      message: "Account created successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email
      }
    })

  } catch (err) {
    console.warn("Error in createUser controller", err);
    res.status(500).json({message: "Internal server error."});
  }
}