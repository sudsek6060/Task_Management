import express from "express";
import { createTask, deleteTask } from "./task.controller.js";

const router = express.Router();

router.post("/create-task", createTask);
router.delete("/delete-task/:id", deleteTask);

export default router;
