class Todoitem {
    constructor(task, priority = "Low", completed = false) {
        this.task = task;
        this.completed = completed;
        this.priority = priority;
    }
}
export { Todoitem };
