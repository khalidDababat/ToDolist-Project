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
  return (
    <Fragment>
      <li className={`priority_${task.priority}`}>
        <div>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={toggleCompleted}
          />
          <label className={task.completed ? "complete_task" : ""}>
            {task.task}
          </label>
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
