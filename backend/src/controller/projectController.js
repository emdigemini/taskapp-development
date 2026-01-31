import Project from "../models/Project.js";
import User from "../models/auth/User.js";

export const getProjects = async (_, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    console.log("Error in getProjects controller", err);
    res.status(500).json({message: "Internal server error"});
  }
}

export const createProject = async (req, res) => {
  try {
    const { name, startDate, endDate, userId} = req.body;
    if(!name || !startDate || !endDate || !userId)
      return res.status(400).json({message: "All fields are required!"});

    const invalidUserIds = [];

    for(let user of userId){
      const exists = await User.findById(user);
      if(!exists) invalidUserIds.push(user);
    }

    console.log(invalidUserIds);
    if(invalidUserIds.length > 0)
      return res.status(404).json({message: `${[...invalidUserIds]} not found.`});

    const newProject = await Project.create({ name, startDate, endDate, members: userId });
    res.status(201).json({message: "Project created successfully.", project: newProject});

    
  } catch (err) {
    console.log("Error in createProject controller", err);
    res.status(500).json({message: "Internal server error"});
  }
}

export const getSelectedProject = async (req, res) => {
  try {

  } catch (err) {
    console.log("Error in getSelectedProject controller", err);
    res.status(500).json({message: "Internal server error"});
  }
}

export const updateProject = async (req, res) => {
  try {
    const { name, endDate, userId } = req.params.body;

    const invalidUserIds = [];
    for(let user of userId){
      const exists = await User.findById(user);
      if(!exists) invalidUserIds.push(user);
    }

    if(invalidUserIds.lnegth > 0)
      return res.status(404).json("User not found.");

    const updateProject = await Project.findByIdAndUpdate(req.params.id, { name, endDate, userId }, { new: true } );

  } catch (err) {
    console.log("Error in updateProject controller", err);
    res.status(500).json({message: "Internal server error"});
  }
}

export const deleteProject = async (req, res) => {
  try {
    const projectDelete = await Project.findByIdAndDelete(req.params.id);
    if(!projectDelete) return res.status(404).json({message: "Project not found."});
    res.status(200).json({message:"Project successfully deleted!"});

  } catch (err) {
    console.log("Error in deleteProject controller", err);
    res.status(500).json({message: "Internal server error"});
  }
}