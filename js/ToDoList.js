import { Todoitem } from "./TodoItem .js";

class ToDoList {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    this.renderTasks();
    // console.log( "this for depug",this.tasks[0]);
  }

  addTask(taskDescription) {
    const value = taskDescription.value.trim();
    const newTask = new Todoitem(value);
    this.tasks.push(newTask);
    this.saveIntoLocalStorage();
    taskDescription.value = "";
  }
   
  removeTask(index) {
    this.tasks.splice(index, 1);
    this.saveIntoLocalStorage();
    this.renderTasks();   
  }

  renderTasks() {
    const ullist  = document.getElementById("conteaner-list");
    ullist .innerHTML = "";

    this.tasks.forEach((e,index) => {
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

      iconEdit.addEventListener("click",()=>{
        const newTask = prompt("Edit your task", e.task);
        if (newTask) {
          this.tasks[index].task = newTask;
          this.saveIntoLocalStorage();
          this.renderTasks();
        }
      })
      iconRemove.addEventListener("click", () => {
         this.removeTask(index);
       
      });

    });
  }

  saveIntoLocalStorage() {
    const taskString = JSON.stringify(this.tasks);
    localStorage.setItem("tasks", taskString);
  }
}

export { ToDoList };
