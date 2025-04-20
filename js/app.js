import { ToDoList } from "./ToDoList.js";

const taskInput = document.getElementById("task-input");
const addbtn = document.querySelector(".input-text button");


document.addEventListener("DOMContentLoaded", () => {
  new ToDoList();
});
