import express from "express";
import { createTask } from "./task.controller.js";

const router = express.Router();

router.post("/create-task", createTask);

export default router;
