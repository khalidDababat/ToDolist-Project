class Todoitem {
  task: string;
  priority: string;
  completed: boolean;

  constructor(task: string, priority: string = "Low", completed = false) {
    this.task = task;
    this.completed = completed;
    this.priority = priority;
  }
}

export { Todoitem };
