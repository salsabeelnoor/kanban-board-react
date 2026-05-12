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

    default:
      return state;
  }
}
