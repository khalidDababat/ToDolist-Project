const taskInput = document.getElementById("task-input");
const addbtn = document.getElementById("add-btn");
const ullist = document.getElementById("conteaner-list");
const listTAsk =JSON.parse(localStorage.getItem("tasks")) || [];  ;
               
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
  //fillContent(); 

}
 
window.onload = function(){
  fillContent(); 
}
  
function findIndex(Task){
   
   let index =-1; 
   for(let i=0;i<listTAsk.length;i++){
         if(Task ==listTAsk[i].task){
              index =i;  
         }
         
   }
  return index; 
     
}

  
  
       
  


   // Use Event Delgation  For Delete Task and Edit Task 
ullist.addEventListener("click", function (e) {
    const label = e.target.parentElement.querySelector("label");
    const taskText = label.textContent.split(" [")[0]; 
    const index = findIndex(taskText);
  if (e.target.classList.contains("icon-remove")) {
    
  
    
     // Remove task from listTAsk
      
    //  console.log(findIndex(taskText));
     
     if (index !== -1) {
        listTAsk.splice(index, 1);
        
         SaveTask();
         fillContent(); 
      }

    }
     if(e.target.classList.contains("icon-edit")){
 
        task = listTAsk[index]; 
   
        const newtask= prompt("Rename The Task!",task.task); 
        listTAsk[index].task =newtask.trim(); 
 
        SaveTask(); 
        fillContent();

      }
  
});
 


function SaveTask() {
  let tasksstring = JSON.stringify(listTAsk); // For Covert Array(Object )Into String
  localStorage.setItem("tasks", tasksstring); 

  
} 
 


 function fillContent(){
  let reterveTask = JSON.parse(localStorage.getItem("tasks")) ||[]; 
     
     ullist.innerHTML = ""; // Clear list first

     for(let i=0 ;i<reterveTask.length;i++){
      // console.log("Hi This",reterveTask[i].task);
      let content =
      `
      <li>
             <input type="checkbox" name="" id=""> 
             <label for="">${reterveTask[i].task}</label>
             <span class="icon-remove">&#128465; </span>
             <span class="icon-edit">&#9998;</span>
      
      </li>
      
      `
         ullist.innerHTML +=content;  
  
     }
     

 }
  







