export function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK" : {
      const {column, task} = action.payload;
      return {
        ...state,
        [column]: [...state[column], task], // this line brings all the existing tasks and adds a new task
      }
    }

    case "EDIT TASK" : {
      const {column, task} = action.payload;
      const newColumn = task.status;
      if(newColumn !== column) {
        const oldColumnTasks = state[column].filter((t) => t.id !== task.id);
        const newColumnTasks = [...state[newColumn], task];
        return {
          ...state,
          [column]: oldColumnTasks,
          [newColumn]: newColumnTasks
        }
      }
      const columnTasks = state[column];
      const updatedTasks = columnTasks.map((t) => t.id === task.id ? task : t);
      
      return{
        ...state,
        [column]: updatedTasks
      }
    }

    case "DELETE TASK" : {
      const {column, task} = action.payload;
      const columnTasks = state[column].filter((t) => t.id !== task.id);
      return {
        ...state,
        [column]: columnTasks
      }
    }

    default:
      return state;
  }
}

export function sortTasks(tasks, sortBy) {
  if(!sortBy || !Array.isArray(tasks)) return tasks;

  const sortedTasks = [...tasks];

  if (sortBy === "newest") {
    sortedTasks.sort((a, b) => {
      const dateA = new Date(a.createdAt || 0);
      const dateB = new Date(b.createdAt || 0);
      return dateB - dateA; // Newest first
    });
  } else if (sortBy === "oldest") {
    sortedTasks.sort((a, b) => {
      const dateA = new Date(a.createdAt || 0);
      const dateB = new Date(b.createdAt || 0);
      return dateA - dateB; // Oldest first
    });
  }
  return sortedTasks;
}
