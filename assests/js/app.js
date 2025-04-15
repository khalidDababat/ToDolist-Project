const taskInput = document.getElementById("task-input");
const addbtn = document.getElementById("add-btn"); 
const ullist = document.getElementById("conteaner-list");
const listTAsk = JSON.parse(localStorage.getItem("tasks")) || [];


function AddTask() {
    const text = taskInput.value.trim();
    if (text == "") {
      return;
    } else {

     createTask(text);  
    }
  }


  function createTask(text) {
    const li = document.createElement("li");
    const inputcheck = document.createElement("input");
    const label = document.createElement("label");
    const spanremove = document.createElement("span");
    const spanedit = document.createElement("span");
  
    const prority = document.getElementsByName("prority");
  
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
  
    let prorityTask;
  
    for (let i = 0; i < prority.length; i++) {
      if (prority[i].checked == true) {
        prorityTask = prority[i].value;
        break;
        // console.log("The Prority Task ",  prorityTask);
      }
    }
  
    const obj = {
      task: text,
      proprity: prorityTask,
      completed: false,
    };
  
    listTAsk.push(obj);
    SaveTask();
   
  }


  function SaveTask() {
    let tasksstring = JSON.stringify(listTAsk); // For Covert Array(Object )Into String
    localStorage.setItem("tasks", tasksstring);

    }

  