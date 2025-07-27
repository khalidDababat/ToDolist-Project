import React, { Fragment } from "react";
import { Todo } from "../types";

type TodoItemProps = {
  task: Todo;
  onDelete: () => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ task, onDelete }) => {
  const prorityClass =
    task.priority === "High"
      ? "High"
      : task.priority === "Low"
      ? "Low"
      : "Medium";

  return (
    <Fragment>
      <li className={`${prorityClass}`}>
        <div>
          <input type="checkbox" />
          <label>{task.task}</label>
        </div>

        <div>
          <span onClick={onDelete}>🗑</span>
          <span>✏️</span>
        </div>
      </li>
    </Fragment>
  );
};

export default TodoItem;
