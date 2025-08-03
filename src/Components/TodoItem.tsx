import React, { Fragment } from "react";
import { Todo } from "../types";
import { removeTask, 
         toggleCompleted, 
         editTask } from "../Store/toDo/TodoSlice";
import { useDispatch } from "react-redux";

type TodoItemProps = {
  task: Todo;
};

const TodoItem: React.FC<TodoItemProps> = ({ task }) => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleCompleted(task.id));
  };

  const handleRemove = () => {
    dispatch(removeTask(task.id));
  };

  const handelEdit = () => {
    const newTask = prompt(
      "Please Insert a new Task for Edit old task!",
      task.task
    );
    if (newTask) {
      dispatch(editTask({ ...task, task: newTask }));
    }
  };

  return (
    <Fragment>
      <li className={`priority_${task.priority}`}>
        <div>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggle}
          />
          <label className={task.completed ? "complete_task" : ""}>
            {task.task}
          </label>
        </div>

        <div>
          <span onClick={() => handleRemove()}>🗑</span>
          <span onClick={() => handelEdit()}>✏️</span>
        </div>
      </li>
    </Fragment>
  );
};

export default TodoItem;
