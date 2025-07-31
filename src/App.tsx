import React from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persister } from "./Store/store";
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <TodoList />
      </PersistGate>
    </Provider>
  );
}

export default App;
