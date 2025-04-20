import { ToDoList } from "./ToDoList.js";

const AddBtn = document.querySelector(".input-text button");
const description_task = document.getElementById("task-input");

document.addEventListener("DOMContentLoaded", () => {
  AddBtn.addEventListener("click", () => {
    if (description_task.value == "") {
      alert("You should add a task!");
    } else {
      new ToDoList();
    }
  });
});
