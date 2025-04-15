 
 class ToDoList{

   constructor(){
      this.tasks =JSON.parse(localStorage.getItem("tasks"))|| []; 
      this.ullist = document.getElementById("conteaner-list");
      
   } 

      addTask(name ,prority){
          const newItem = {
            task: name,
            priority: prority,
            completed: false
          } 
          this.tasks.push(newItem); 
          //console.log(this.tasks);   // Depuging  Done   
          this.SaveTask(); 

      }

      PrintTask(text ,selectedPrority){
        
         this.ullist.innerHTML =''; 
         for(let i=0 ;i<this.tasks.length;i++){
            const li = document.createElement('li');
            
            if(this.tasks[i].completed){
                li.classList.add('checked'); 
            }

             li.innerHTML =`
                   <input type="checkbox" name="" id=""> 
                   <label for=""> ${this.tasks[i].task}</label>
                   <span class="icon-remove">&#128465; </span>
                   <span class="icon-edit">&#9998;</span>
             
             
                           `;
            this.ullist.appendChild(li);         

         }

       
      }

      
       
       SaveTask() {
        let tasksstring = JSON.stringify(this.tasks); // For Covert Array(Object )Into String
        localStorage.setItem("tasks", tasksstring);
    
        }


 }

 export {ToDoList}; 