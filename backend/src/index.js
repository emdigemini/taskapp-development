import bcrypt from "bcrypt";
import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";

import rateLimiter from "./middleware/rateLimiter.js";
import { connectDB } from "./config/db.js";
import signupRoutes from "./routes/auth/signupRoutes.js";
import loginRoutes from "./routes/auth/loginRoutes.js";
import userRoutes from "./routes/auth/userRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cookieParser());

// middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(rateLimiter);

// routes
app.use("/api", signupRoutes);
app.use("/api", loginRoutes);
app.use("/api", userRoutes);
app.use("/api", projectRoutes);
app.use("/api", taskRoutes);

(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log("Server started on PORT:", PORT));
  } catch (err) {
    console.log("Server failed to start", err);
    process.exit(1);
  }
})();