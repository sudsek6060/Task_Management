import Task from "./task.model.js";
import { errorHandler } from "./utils/errorhandler.js";

export const createTask = async (req, res, next) => {
  const { title, description, priority, category } = req.body;
  try {
    const task = await Task.create({
      title,
      description,
      priority,
      category,
    });
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  if (!task) next(errorHandler(404, "Task not found"));

  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "task deleted successfully" });
  } catch (error) {
    next(error);
  }
};
