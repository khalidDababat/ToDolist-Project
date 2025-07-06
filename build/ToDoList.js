import { Todoitem } from "./TodoItem.js";
class ToDoList {
    constructor() {
        var _a, _b, _c, _d;
        this.tasks = [];
        this.filterTask = "All";
        this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        this.filterTask = "All";
        (_a = document.getElementById("btn-low")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            this.setFilter("Low");
        });
        (_b = document.getElementById("btn-High")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
            this.setFilter("High");
        });
        (_c = document.getElementById("btn-medeum")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
            this.setFilter("Medeum");
        });
        (_d = document.getElementById("btn-all")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
            this.setFilter("All");
        });
        this.renderTasks();
    }
    addTask(input, priority) {
        const value = input.value.trim();
        if (value == "")
            return;
        const newTask = new Todoitem(value, priority);
        console.log("task new ", newTask);
        this.tasks.push(newTask);
        this.saveIntoLocalStorage();
        input.value = "";
    }
    setFilter(filterTask) {
        this.filterTask = filterTask;
        this.renderTasks();
    }
    removeTask(index) {
        this.tasks.splice(index, 1);
        this.saveIntoLocalStorage();
        this.renderTasks();
    }
    renderTasks() {
        const ullist = document.getElementById("conteaner-list");
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
                    }
                    else {
                        taskLabel.className = "unchecked";
                    }
                    this.saveIntoLocalStorage();
                });
                if (task.completed == true) {
                    taskLabel.className = "checked";
                }
                else {
                    taskLabel.className = "unchecked";
                }
                inputCheck.checked = task.completed;
                if (task.priority == "High") {
                    listItem.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
                }
                else if (task.priority == "Medeum") {
                    listItem.style.backgroundColor = "rgba(255, 165, 0, 0.2)";
                }
                else {
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
