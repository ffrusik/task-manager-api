class TaskService {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  // getters
  getAll() {
    return this.tasks;
  }

  getById(id) {
    return this.tasks.find((task) => task.id === Number(id)) || null;
  }

  create(title) {
    if (typeof title !== "string" || !title.trim()) {
      throw new Error("Title is required");
    }

    const task = {
      id: this.nextId++,
      title: title.trim(),
      completed: false,
    };

    this.tasks.push(task);
    return task;
  }

  update(id, changes) {
    const task = this.getById(id);

    if (!task) {
      return null;
    }

    if (Object.hasOwn(changes, "title")) {
      if (typeof changes.title !== "string" || !changes.title.trim()) {
        throw new Error("Title is required");
      }

      task.title = changes.title.trim();
    }

    if (Object.hasOwn(changes, "completed")) {
      if (typeof changes.completed !== "boolean") {
        throw new Error("Completed must be a boolean");
      }

      task.completed = changes.completed;
    }

    return task;
  }

  delete(id) {
    const index = this.tasks.findIndex((task) => task.id === Number(id));

    if (index === -1) {
      return false;
    }

    this.tasks.splice(index, 1);
    return true;
  }
}

module.exports = TaskService;
