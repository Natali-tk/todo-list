import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "./slices/todosSlice";

const rootReducer = combineReducers({
  [todosSlice.reducerPath]: todosSlice.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefault) => getDefault().concat(todosSlice.middleware)
  });
}
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];