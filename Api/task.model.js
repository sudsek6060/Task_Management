import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Low",
  },
  category: {
    type: String,
    enum: ["Personal", "Professional"],
  },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
