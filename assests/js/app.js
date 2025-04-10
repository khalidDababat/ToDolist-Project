const taskInput = document.getElementById("task-input");
const addbtn = document.getElementById("add-btn");





function AddTask() { 
  const text = taskInput.value.trim();
  if (text == "") {
    return;

  } else {
    createTask(text);
  }
}

function createTask(text){ 

     
    const ullist = document.getElementById('conteaner-list'); 
    const li     =document.createElement('li'); 
    const inputcheck  =document.createElement('input');
    const label  =document.createElement('label'); 
    const spanremove  =document.createElement('span');
    const spanedit  =document.createElement('span');

    inputcheck.setAttribute("type","checkbox");
    label.innerHTML =`${text}`; 
    spanremove.setAttribute("class",'icon-remove'); 
    spanedit.setAttribute('class','icon-edit'); 
    spanremove.innerHTML ="&#128465"; 
    spanedit.innerHTML = "&#9998;"; 

    ullist.appendChild(li); 
    li.appendChild(inputcheck);
    li.appendChild(label);
    li.appendChild(spanremove);
    li.appendChild(spanedit);

    // const obj ={
    //     "task":text,
    //     "proprity":
    // }; 
     
     
    console.log("Done"); 
} 


