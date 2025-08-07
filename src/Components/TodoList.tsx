import React, { useState } from "react";
import "./Todo.scss";
import logo from "../assists/images/logo.jpg";
import TodoItem from "./TodoItem";
import { PriorityType, Todo } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/store";
import { v4 as uuid } from "uuid";
import { saveTask } from "../Store/toDo/TodoSlice";

const TodoList: React.FC = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState<PriorityType>(PriorityType.low);
  const [filter, setFilter] = useState("All");
  const tasks = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();


  const addTask = () => {
    if (!task.trim()) {
      alert("You should add a task!");
    } else {
      const newTask: Todo = {
        id: uuid(),
        task: task,
        priority: priority,
        completed: false,
      };
      dispatch(saveTask(newTask));
      setTask("");
    }
  };


  return (
    <>
      <div className="container_todo">
        <h2>
          To-Do List <img src={logo} alt="logoToDo" />
        </h2>

        <div className="category_priority">
          <p>Task Priority:</p>

          <div>
            <label>
              <input
                type="radio"
                name="priority"
                checked={priority === PriorityType.low}
                value={PriorityType.low}
                onChange={() => setPriority(PriorityType.low)}
              />
              LOW
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value={PriorityType.high}
                checked={priority === PriorityType.high}
                onChange={() => setPriority(PriorityType.high)}
              />
              High
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value={PriorityType.medium}
                checked={priority === PriorityType.medium}
                onChange={() => setPriority(PriorityType.medium)}
              />
              Medium
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

        <div className="categoryPriorityBtn">
          <button
            className={filter === "All" ? "active_filter" : ""}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className={filter === PriorityType.low ? "active_filter" : ""}
            onClick={() => setFilter(PriorityType.low)}
          >
            Low
          </button>
          <button
            className={filter === PriorityType.medium ? "active_filter" : ""}
            onClick={() => setFilter(PriorityType.medium)}
          >
            Medium
          </button>
          <button
            className={filter === PriorityType.high ? "active_filter" : ""}
            onClick={() => setFilter(PriorityType.high)}
          >
            High
          </button>
        </div>
        <hr />
        <ul>
          {tasks
            .filter((task) => filter === "All" || task.priority === filter)
            .map((todo) => (
              <TodoItem key={todo.id} task={todo} />
            ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
