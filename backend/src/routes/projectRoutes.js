import express from "express";
import { getProjects, createProject, getSelectedProject, updateProject, deleteProject } from "../controller/projectController.js";

const router = express.Router();

router.get("/projects", getProjects);
router.post("/projects", createProject);
router.get("/projects/:id", getSelectedProject);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);

export default router;