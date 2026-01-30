import express from "express";
import { getProjects, createProject, getSelectedProject, updateProject, deleteProject } from "../controller/projectController.js";

const router = express.Router();

router.get("/", getProjects);
router.post("/", createProject);
router.get("/:id", getSelectedProject);
router.updateProject("/:id", updateProject);
router.deleteProject("/:id", deleteProject);

export default router;