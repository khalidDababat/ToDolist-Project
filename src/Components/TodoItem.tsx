import React, { Fragment } from "react";
import { Todo } from "../types";

type TodoItemProps = {
  task: Todo;
  onDelete: () => void;
  onEdit: () => void;
  toggleCompleted: () => void;
};

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  onDelete,
  onEdit,
  toggleCompleted,
}) => {
  const prorityClass =
    task.priority === "High"
      ? "High"
      : task.priority === "Low"
      ? "Low"
      : "Medium";

  const completedClass = task.completed === true ? "toggle" : "";

  return (
    <Fragment>
      <li className={`${prorityClass} `}>
        <div>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={toggleCompleted}
          />
          <label className={`${completedClass}`}>{task.task}</label>
        </div>

        <div>
          <span onClick={onDelete}>🗑</span>
          <span onClick={onEdit}>✏️</span>
        </div>
      </li>
    </Fragment>
  );
};

export default TodoItem;
