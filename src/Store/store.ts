import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import todoReducer from "../Features/TodoSlice";

const rootReducer = combineReducers({
  todos: todoReducer,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export default store;
