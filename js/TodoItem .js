class Todoitem {
  constructor(task, priority = "low", completed = false) {
    this.task = task;
    this.completed = completed;
    this.priority = priority;
  }
}

export { Todoitem };
