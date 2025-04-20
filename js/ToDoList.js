import { Todoitem } from "./TodoItem .js";

class ToDoList {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  input_task = document.getElementById("task-input");
  addBtn = document.getElementById("add-btn");

  constructor() {
    this.addBtn.addEventListener("click", () => {
      if (this.input_task.value == "") {
        alert("You should add a task!");
      } else {
        //console.log("this is value",this.input_task.value);
        this.addTask(this.input_task.value);
        this.SaveTask();
      }
    });
  }

  addTask(name) {
    const value = this.input_task.value.trim();
    const newTask = new Todoitem(value);

    this.tasks.push(newTask);
    this.SaveTask();
    // console.log("this value before Print",this.input_task.value);
    this.PrintTask(this.input_task.value);
    this.input_task.value = " ";
  }

  PrintTask(text) {
    const ullist = document.getElementById("conteaner-list");
    const li = document.createElement("li");
    const inputcheck = document.createElement("input");
    const label = document.createElement("label");
    const spanremove = document.createElement("span");
    const spanedit = document.createElement("span");

    inputcheck.setAttribute("type", "checkbox");
    label.innerHTML = `${text}`;
    spanremove.setAttribute("class", "icon-remove");
    spanedit.setAttribute("class", "icon-edit");
    spanremove.innerHTML = "&#128465";
    spanedit.innerHTML = "&#9998;";

    ullist.appendChild(li);
    li.appendChild(inputcheck);
    li.appendChild(label);
    li.appendChild(spanremove);
    li.appendChild(spanedit);
  }

  SaveTask() {
    let tasksstring = JSON.stringify(this.tasks); // For Covert Array(Object )Into String
    localStorage.setItem("tasks", tasksstring);
  }
}

export { ToDoList };
