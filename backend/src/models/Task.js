import mongoose, { mongo } from "mongoose";

const taskSchema = new mongoose.Schema({
  name: String,
  objectives: String,
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }]
}, { timestamps: true });

const Task = mongoose.model("Task", taskSchema);

export default Task;