class Todoitem {
  constructor(task, priority, completed = false) {
    this.task = task;
    this.completed = completed;
    this.priority = priority;
  }
}

export { Todoitem };
