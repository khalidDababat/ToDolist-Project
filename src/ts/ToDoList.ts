import { Todoitem } from "./TodoItem.ts";

class ToDoList {
  private tasks: Todoitem[] = [];
  private filterTask: string = "All";

  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")!) || [];
    this.filterTask = "All";
    document.getElementById("btn-low")?.addEventListener("click", () => {
      this.setFilter("Low");
    });
    document.getElementById("btn-High")?.addEventListener("click", () => {
      this.setFilter("High");
    });
    document.getElementById("btn-medeum")?.addEventListener("click", () => {
      this.setFilter("Medeum");
    });
    document.getElementById("btn-all")?.addEventListener("click", () => {
      this.setFilter("All");
    });

    this.renderTasks();
  }

  addTask(input: HTMLInputElement, priority: string): void {
    const value = input.value.trim();
    if (value == "") return;

    const newTask = new Todoitem(value, priority);
    console.log("task new ", newTask);
    this.tasks.push(newTask);

    this.saveIntoLocalStorage();
    input.value = "";
  }

  setFilter(filterTask: string): void {
    this.filterTask = filterTask;
    this.renderTasks();
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveIntoLocalStorage();
    this.renderTasks();
  }

  renderTasks(): void {
    const ullist = document.getElementById(
      "conteaner-list"
    ) as HTMLUListElement;
    ullist.innerHTML = "";

    this.tasks.forEach((task, index) => {
      if (this.filterTask === "All" || this.filterTask === task.priority) {
        const listItem = document.createElement("li");
        const inputCheck = document.createElement("input");
        const taskLabel = document.createElement("label");
        const iconRemove = document.createElement("span");
        const iconEdit = document.createElement("span");

        inputCheck.setAttribute("type", "checkbox");
        taskLabel.innerHTML = task.task;
        iconRemove.setAttribute("class", "icon-remove");
        iconEdit.setAttribute("class", "icon-edit");
        iconRemove.innerHTML = "&#128465";
        iconEdit.innerHTML = "&#9998";

        ullist.appendChild(listItem);
        listItem.appendChild(inputCheck);
        listItem.appendChild(taskLabel);
        listItem.appendChild(iconRemove);
        listItem.appendChild(iconEdit);

        inputCheck.addEventListener("click", () => {
          this.tasks[index].completed = inputCheck.checked;
          if (this.tasks[index].completed === true) {
            taskLabel.className = "checked";
          } else {
            taskLabel.className = "unchecked";
          }

          this.saveIntoLocalStorage();
        });

        if (task.completed == true) {
          taskLabel.className = "checked";
        } else {
          taskLabel.className = "unchecked";
        }
        inputCheck.checked = task.completed;

        if (task.priority == "High") {
          listItem.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        } else if (task.priority == "Medeum") {
          listItem.style.backgroundColor = "rgba(255, 165, 0, 0.2)";
        } else {
          listItem.style.backgroundColor = "rgba(0, 128, 0, 0.2)";
        }

        iconEdit.addEventListener("click", () => {
          const newTask = prompt("Edit your task", task.task);
          if (newTask) {
            this.tasks[index].task = newTask;
            this.saveIntoLocalStorage();
            this.renderTasks();
          }
        });
        iconRemove.addEventListener("click", () => {
          this.removeTask(index);
        });
      }
    });
  }

  saveIntoLocalStorage() {
    const taskString = JSON.stringify(this.tasks);
    localStorage.setItem("tasks", taskString);
  }
}

export { ToDoList };
