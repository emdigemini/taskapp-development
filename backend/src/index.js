import bcrypt from "bcrypt";
import express from "express";
import "dotenv/config";
import cors from "cors";
import jwt from "jsonwebtoken";

import rateLimiter from "./middleware/rateLimiter.js";
import { connectDB } from "./config/db.js";
import signupRoutes from "./routes/auth/signupRoutes.js";
import loginRoutes from "./routes/auth/loginRoutes.js";

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(rateLimiter);

// routes
app.use("/api/signup", signupRoutes);
app.use("/api/login", loginRoutes);

(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log("Server started on PORT:", PORT));
  } catch (err) {
    console.log("Server failed to start", err);
    process.exit(1);
  }
})();