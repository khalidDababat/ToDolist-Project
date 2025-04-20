import { Todoitem } from "./TodoItem .js";

class ToDoList {
  description_task = document.getElementById("task-input");

  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    this.addTask(this.description_task);
  }

  addTask(description_task) {
    const value = description_task.value.trim();
    const newTask = new Todoitem(value);
    this.tasks.push(newTask);
    this.Save_Into_LocalStorge();
    this.renderTasks();
    description_task.value = " ";
  }

  renderTasks() {
    const Ul_list = document.getElementById("conteaner-list");
    Ul_list.innerHTML = "";

    this.tasks.forEach((e) => {
      const List_Item = document.createElement("li");
      const InputCheck = document.createElement("input");
      const Label_Text = document.createElement("label");
      const IconRemove = document.createElement("span");
      const IconEdit = document.createElement("span");

      InputCheck.setAttribute("type", "checkbox");
      Label_Text.innerHTML = e.task;
      IconRemove.setAttribute("class", "icon-remove");
      IconEdit.setAttribute("class", "icon-edit");
      IconRemove.innerHTML = "&#128465";
      IconEdit.innerHTML = "&#9998;";

      Ul_list.appendChild(List_Item);
      List_Item.appendChild(InputCheck);
      List_Item.appendChild(Label_Text);
      List_Item.appendChild(IconRemove);
      List_Item.appendChild(IconEdit);
    });
  }

  Save_Into_LocalStorge() {
    let TaskString = JSON.stringify(this.tasks);
    localStorage.setItem("tasks", TaskString);
  }
}

export { ToDoList };
