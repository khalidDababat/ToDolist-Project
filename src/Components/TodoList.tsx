import React, { useEffect, useState } from "react";
import "./Todo.scss";
import logo from "../assests/images/logo.jpg";
import TodoItem from "./TodoItem";
import { PriorityType, Todo } from "../types";

const TodoList: React.FC = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState<PriorityType>(PriorityType.low);
  const [filter, setFilter] = useState<PriorityType | "All">("All");
  const [tasks, setTasks] = useState<Todo[]>(() => {
    const savedTasksInLocalStorge = localStorage.getItem("task");
    return savedTasksInLocalStorge ? JSON.parse(savedTasksInLocalStorge) : [];
  });

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

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

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

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

  return (
    <>
      <div className="conteaner_todo">
        <h2>
          To-Do List <img src={logo} alt="logoToDo" />
        </h2>

        <div className="category_prority">
          <p>Task Priority:</p>

          <div>
            <label>
              <input
                type="radio"
                name="priority"
                checked={priority === PriorityType.low}
                id="low"
                value={PriorityType.low}
                onChange={() => setPriority(PriorityType.low)}
              />
              LOW
            </label>
            <label>
              <input
                type="radio"
                name="prority"
                id="high"
                value={PriorityType.high}
                checked={priority === PriorityType.high}
                onChange={() => setPriority(PriorityType.high)}
              />
              High
            </label>
            <label>
              <input
                type="radio"
                name="prority"
                id="Medeum"
                value={PriorityType.medium}
                checked={priority === PriorityType.medium}
                onChange={() => setPriority(PriorityType.medium)}
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

        <div className="categoryPriortyBtn">
          <button
            id="btn-all"
            className={filter === "All" ? "active_filter" : ""}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            id="btn-low"
            className={filter === PriorityType.low ? "active_filter" : ""}
            onClick={() => setFilter(PriorityType.low)}
          >
            Low
          </button>
          <button
            id="btn-medeum"
            className={filter === PriorityType.medium ? "active_filter" : ""}
            onClick={() => setFilter(PriorityType.medium)}
          >
            Medeum
          </button>
          <button
            id="btn-High"
            className={filter === PriorityType.high ? "active_filter" : ""}
            onClick={() => setFilter(PriorityType.high)}
          >
            High
          </button>
        </div>

        <hr />

        <ul>
          {tasks
            .filter((task) => filter === "All" || filter === task.priority)
            .map((task, index) => (
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
