import { createContext, useReducer, useState } from "react";
import { getAllData, categoryStyles } from "../data/kanbanData";
import { taskReducer } from "../reducer/taskReducer";

const TaskContext = createContext();
const initialState = getAllData();

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [editingColumn, setEditingColumn] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const onEditFormOpen = (task, columnName) => {
    setIsEditFormOpen(true);
    setTaskToEdit(task);
    setEditingColumn(columnName);
  }

  const onEditFormClose = () => {
    setIsEditFormOpen(false);
    setTaskToEdit(null);
    setEditingColumn(null);
  }

  const handleSort = (sortType) => {
    setSortBy(sortType);
  }

  return (
    <TaskContext.Provider value={{ 
      state, 
      dispatch, 
      categoryStyles,
      isEditFormOpen,
      taskToEdit,
      editingColumn,
      sortBy,
      onEditFormOpen,
      onEditFormClose,
      handleSort
       }}>
      {children}
    </TaskContext.Provider>
  );
}
export default TaskContext;