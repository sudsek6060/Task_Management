import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import taskRouter from "./task.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("server is running at 3000");
});

app.use("/api/task", taskRouter);
