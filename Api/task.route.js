import express from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTaskListings,
  updateTask,
} from "./task.controller.js";

const router = express.Router();

router.get("/get-tasks", getTaskListings);
router.post("/create-task", createTask);
router.post("/update-task/:id", updateTask);
router.delete("/delete-task/:id", deleteTask);
router.get("/get-task/:id", getTask);

export default router;
