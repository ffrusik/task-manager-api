const TaskService = require("../src/services/TaskService");

describe("TaskService test suite", () => {
  let service;

  beforeEach(() => {
    service = new TaskService();
  });

  test("creates a task successfully", () => {
    const task = service.create("Finish DevOps assignment");

    expect(task).toEqual({
      id: 1,
      title: "Finish DevOps assignment",
      completed: false,
    });
  });

  test("rejects a task with an empty title", () => {
    expect(() => service.create(" ")).toThrow("Title is required");
  });
});
