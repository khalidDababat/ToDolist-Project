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
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    },
    editTask: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo,
      );
    },
  },
});

export const { saveTask, removeTask, toggleCompleted, editTask } =
  TodoSlice.actions;
export default TodoSlice.reducer;
