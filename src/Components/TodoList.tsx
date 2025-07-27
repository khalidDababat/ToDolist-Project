import React, { useEffect, useState } from "react";
import "./Todo.css";
import logo from "../assests/images/logo.jpg";
import TodoItem from "./TodoItem";
import { Priority, Todo } from "../types";

const TodoList: React.FC = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState<Priority>("Low");
  const [tasks, setTasks] = useState<Todo[]>(() => {
    const savedTasksInLocalStorge = localStorage.getItem("task");
    return savedTasksInLocalStorge ? JSON.parse(savedTasksInLocalStorge) : [];
  });

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const addTask = () => {
    if (!task.trim()) {
      alert("You should add a task!");
    } else {
      const newTask: Todo = {
        task,
        completed: false,
        priority: priority,
      };

      setTasks([...tasks, newTask]);
      setTask("");
    }
  };

  return (
    <>
      <div className="conteaner_todo">
        <h2>
          To-Do List <img src={logo} alt="logoToDo" />
        </h2>

        <div className="category_prority">
          <p>task priority:</p>

          <div>
            <label>
              <input
                type="radio"
                name="prority"
                checked={priority == "Low"}
                id="low"
                value="Low"
                onChange={() => setPriority("Low")}
              />
              LOW
            </label>
            <label>
              <input
                type="radio"
                name="prority"
                id="high"
                value="High"
                checked={priority == "High"}
                onChange={() => setPriority("High")}
              />
              High
            </label>
            <label>
              <input
                type="radio"
                name="prority"
                id="Medeum"
                value="Medium"
                checked={priority == "Medium"}
                onChange={() => setPriority("Medium")}
              />
              Medeum
            </label>
          </div>
        </div>

        <div className="input_task">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new Task"
          />
          <button type="button" onClick={() => addTask()}>
            Add
          </button>
        </div>

        <div className="categoryProrityBtn">
          <button id="btn-all">All</button>
          <button id="btn-low">Low</button>
          <button id="btn-medeum">Medeum</button>
          <button id="btn-High">High</button>
        </div>

        <hr />

        <ul>
          {tasks.map((task, index) => (
            <TodoItem
              key={index}
              task={task}
              onDelete={() => removeTask(index)}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
