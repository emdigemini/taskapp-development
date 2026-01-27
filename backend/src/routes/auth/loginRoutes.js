import express from "express";
import { loginUser } from "../../controller/auth/loginController.js";

const router = express.Router();

router.post("/", loginUser);

export default router;