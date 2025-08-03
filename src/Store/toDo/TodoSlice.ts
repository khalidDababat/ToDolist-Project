import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../types";

interface todoState {
  todos: Todo[];
}

const initialState: todoState = {
  todos: [],
};
export const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTask: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    toggleCompleted: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTask: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );

      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
  },
});

export const { saveTask, removeTask, toggleCompleted, editTask } =
  TodoSlice.actions;
export default TodoSlice.reducer;
