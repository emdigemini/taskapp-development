import jwt from "jsonwebtoken"; 

const auth = (req, res, next) => {
  const token = req.headers["Authorization"]?.replace("bearer ", "");

  if(!token)
    return res.status(401).json({message: "No token, access denied"});

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({message: "Invalid token"});
  }
}

export default auth;

// Login
//  ↓
// Server gives JWT
//  ↓
// Frontend saves token
//  ↓
// User opens dashboard
//  ↓
// Axios sends token
//  ↓
// Backend middleware checks
//  ↓
// Valid? enter dashboard
// Invalid? 401
