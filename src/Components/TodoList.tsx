import React, { useEffect, useState } from "react";
import "./Todo.scss";
import logo from "../assests/images/logo.jpg";
import TodoItem from "./TodoItem";
import { Priority, Todo } from "../types";

const TodoList: React.FC = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState<Priority>("Low");
  const [fillter, setFillter] = useState<Priority | "All">("All");
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

  const filterTasks = tasks.filter((task) => {
    if (fillter === "All") return true;
    return task.priority === fillter;
  });

  const canEdit = (index: number) => {
    const newTask = prompt(
      "Please Insert a new Task for Edit old task!",
      tasks[index].task
    );

    if (newTask) {
      const editedTask = tasks.map((t, i) => {
        return i === index ? { ...t, task: newTask } : t;
      });
      setTasks(editedTask);
    }
  };

  const toggleCompleted = (index: number) => {
    const ubdateTasks = tasks.map((t, i) => {
      return i === index ? { ...t, completed: !t.completed } : t;
    });
    setTasks(ubdateTasks);
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
                checked={priority === "Low"}
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
                checked={priority === "High"}
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
                checked={priority === "Medium"}
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
          <button id="btn-all" onClick={() => setFillter("All")}>
            All
          </button>
          <button id="btn-low" onClick={() => setFillter("Low")}>
            Low
          </button>
          <button id="btn-medeum" onClick={() => setFillter("Medium")}>
            Medeum
          </button>
          <button id="btn-High" onClick={() => setFillter("High")}>
            High
          </button>
        </div>

        <hr />

        <ul>
          {filterTasks.map((task, index) => (
            <TodoItem
              key={index}
              task={task}
              onDelete={() => removeTask(index)}
              onEdit={() => canEdit(index)}
              toggleCompleted={() => toggleCompleted(index)}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
