const express = require("express");

function createTaskRouter(taskService) {
  const router = express.Router();

  router.get("/", (req, res) => {
    res.json(taskService.getAll());
  });

  router.get("/:id", (req, res) => {
    const task = taskService.getById(req.params.id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(task);
  });

  router.post("/", (req, res) => {
    try {
      const task = taskService.create(req.body.title);
      res.status(201).json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.put("/:id", (req, res) => {
    try {
      const task = taskService.update(req.params.id, req.body);

      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }

      res.json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.delete("/:id", (req, res) => {
    const deleted = taskService.delete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(204).send();
  });

  return router;
}

module.exports = createTaskRouter;
