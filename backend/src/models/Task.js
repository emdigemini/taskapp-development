import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true
  },
  

}, { timestamps: true })