import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  members: [
      { 
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      task: {
        type: String,
        required: true
      },
      objectives: {
        type: String,
        default: "No objectives given"
      }
    }
  ]
}, { timestamps: true });

const Task = mongoose.model("Task", taskSchema);

export default Task;