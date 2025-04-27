import { ToDoList } from "./ToDoList.js";

const addBtn = document.querySelector(".input-text button");
const descriptionTask = document.getElementById("task-input");

document.addEventListener("DOMContentLoaded", () => {
  const newTask = new ToDoList();
  addBtn.addEventListener("click", () => {
    if (descriptionTask.value == "") {
      alert("You should add a task!");
    } else {
      newTask.addTask(descriptionTask);
      newTask.renderTasks();
    }
  });
});
