import { Todoitem } from "./TodoItem .js";

class ToDoList {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    this.renderTasks();
  }

  addTask(taskDescription) {
    const value = taskDescription.value.trim();
    const newTask = new Todoitem(value);
    this.tasks.push(newTask);
    this.saveIntoLocalStorage();
    taskDescription.value = "";
  }
   
    

  renderTasks() {
    const ullist  = document.getElementById("conteaner-list");
    ullist .innerHTML = "";

    this.tasks.forEach((e) => {
      const listItem = document.createElement("li");
      const inputCheck = document.createElement("input");
      const taskLabel = document.createElement("label");
      const iconRemove = document.createElement("span");
      const iconEdit = document.createElement("span");

      inputCheck.setAttribute("type", "checkbox");
      taskLabel.innerHTML = e.task;
      iconRemove.setAttribute("class", "icon-remove");
      iconEdit.setAttribute("class", "icon-edit");
      iconRemove.innerHTML = "&#128465";
      iconEdit.innerHTML = "&#9998;";

      ullist .appendChild(listItem);
      listItem.appendChild(inputCheck);
      listItem.appendChild(taskLabel);
      listItem.appendChild(iconRemove);
      listItem.appendChild(iconEdit);
    });
  }

  saveIntoLocalStorage() {
    const taskString = JSON.stringify(this.tasks);
    localStorage.setItem("tasks", taskString);
  }
}

export { ToDoList };
