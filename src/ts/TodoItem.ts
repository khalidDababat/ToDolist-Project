class Todoitem {
  public task: string;
  public priority: string;
  public completed: boolean;

  constructor(task: string, priority: string = "Low", completed = false) {
    this.task = task;
    this.completed = completed;
    this.priority = priority;
  }
}

export { Todoitem };
