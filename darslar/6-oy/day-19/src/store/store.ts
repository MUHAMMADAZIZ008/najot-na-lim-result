import { configureStore } from "@reduxjs/toolkit";
import counter from "./reducers/counter-reducer";
import todo from "./reducers/todo-reducer";
import { loadState, saveState } from "../config/storage";

export const store = configureStore({
  reducer: {
    javohir: counter,
    todo,
  },
  preloadedState: {
    todo: loadState("todo"),
  },
});

store.subscribe(() => {
  saveState("todo", store.getState().todo);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
