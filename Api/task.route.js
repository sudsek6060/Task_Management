import express from "express";
import { createTask, deleteTask, updateTask } from "./task.controller.js";

const router = express.Router();

router.post("/create-task", createTask);
router.post("/update-task/:id", updateTask);
router.delete("/delete-task/:id", deleteTask);

export default router;
