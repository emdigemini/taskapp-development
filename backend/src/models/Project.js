import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  creatorId: {
    type: String,
    required: true
  },
  projName: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }]
}, { timestamps: true });

const Project = mongoose.model("Project", projectSchema);

export default Project;