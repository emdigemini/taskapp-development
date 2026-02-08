import express from "express";
import { getProjects, createProject, getSelectedProject, updateProject, deleteProject } from "../controller/projectController.js";
import authentication from "../middleware/authentication.js";

const router = express.Router();

router.get("/projects", authentication, getProjects);
router.post("/projects", authentication, createProject);
router.get("/projects/:id", authentication, getSelectedProject);
router.put("/projects/:id", authentication, updateProject);
router.delete("/projects/:id", authentication, deleteProject);

export default router;