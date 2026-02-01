import jwt from "jsonwebtoken"; 

const authentication = (req, res, next) => {
  const token = req.cookies.token; // read JWT from cookie

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

export default authentication;

// Page loads →
// Frontend calls /auth/me →
// Backend checks cookie JWT →
// Returns user or 401 →
// ProtectedRoute decides
