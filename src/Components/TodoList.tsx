import React, { useState } from "react";
import styles from "./Todo.module.css";
import logo from "../assests/images/logo.jpg"; 

import {Priority,Todo} from "../types"
import { chownSync } from "fs";

const TodoList :React.FC = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] =useState<Priority>("Low"); 
  const [tasks, setTasks] =useState<Todo[]>([]);

  return (
    <>
      <div className={styles.conteaner_todo}>
        <h2>
          To-Do List <img src={logo} alt="logoToDo" />
        </h2>

        <div className={styles.category_prority}>
          <p>task priority:</p>

          <div>
            <label>
              <input type="radio" name="prority" checked id="low" value="Low" />
              LOW
            </label>
            <label>
              <input type="radio" name="prority" id="high" value="High" />
              High
            </label>
            <label>
              <input type="radio" name="prority" id="Medeum" value="Medeum" />
              Medeum
            </label>
          </div>
        </div>

        <div className={styles.input_task}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new Task"
          />
          <button type="button">Add</button>
        </div>

        <div className={styles.categoryProrityBtn}>
          <button id="btn-all">All</button>
          <button id="btn-low">Low</button>
          <button id="btn-medeum">Medeum</button>
          <button id="btn-High">High</button>
        </div>

        <hr />
      </div>
    </>
  );
};

export default TodoList;
