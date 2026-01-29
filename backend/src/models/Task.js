import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: String,
  objectives: String,
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }];
})