export function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK" : {
      const {column, task} = action.payload;
      return {
        ...state,
        [column]: [...state[column], task], // this line brings all the existing tasks and adds a new task
      }
    }

    default:
      return state;
  }
}
