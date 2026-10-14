const express = require("express");
const TaskService = require("./services/TaskService");
const createTaskRouter = require("./routes/taskRoutes");

const app = express();
const taskService = new TaskService();

app.use(express.json());
app.use("/api/tasks", createTaskRouter(taskService));

module.exports = app;
