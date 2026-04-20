import { createContext, useReducer } from "react";
import { getAllData, categoryStyles } from "../data/kanbanData";
import { taskReducer } from "../reducer/taskReducer";

const TaskContext = createContext();
const initialState = getAllData();

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch, categoryStyles }}>
      {children}
    </TaskContext.Provider>
  );
}
export default TaskContext;