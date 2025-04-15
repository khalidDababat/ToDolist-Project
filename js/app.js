import { ToDoList  } from "./ToDoList.js";

const taskInput = document.getElementById("task-input");
const addbtn = document.querySelector(".input-text button");
let selectedPrority =  document.getElementsByName("prority"); 





  addbtn.addEventListener("click",()=>{
    
    const ToDolist = new ToDoList();  
    let task = taskInput.value.trim(); 
    let Prority ; 

    for(let i =0;i<selectedPrority.length;i++){
        if(selectedPrority[i].checked){
           Prority =selectedPrority[i].value; 
        }
    }
      

    if (task == "") {
      return;
    } else {

      ToDolist.addTask(task,Prority);
      ToDolist.PrintTask(task,Prority);
    }
    


  });  
    


  


  

  