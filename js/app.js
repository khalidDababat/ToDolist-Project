import { ToDoList } from "./ToDoList.js";

const addBtn = document.querySelector(".input-text button");
const descriptionTask = document.getElementById("task-input");
const priorityTask = document.getElementsByName("prority");
 


document.addEventListener("DOMContentLoaded", () => {
  const toDoList = new ToDoList();
  addBtn.addEventListener("click", () => {
    if (descriptionTask.value == "") {
      alert("You should add a task!");
    } else {
      for (let i = 0; i < priorityTask.length; i++) {
        if (priorityTask[i].checked) {
          var priority = priorityTask[i].value;
          toDoList.addTask(descriptionTask, priority);
          break;
        }
      }

      toDoList.renderTasks();
    }

  });

  
 
});
