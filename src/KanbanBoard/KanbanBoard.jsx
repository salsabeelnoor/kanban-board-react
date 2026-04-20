
import TaskContext from "../context/TaskContext";
import TaskColumn from "./TaskColumn";
import { useContext } from "react";


export default function KanbanBoard() {
  const { state: taskData } = useContext(TaskContext); 
  
  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
      <div className="flex flex-col gap-6 xl:flex-row h-full">
        {
          Object.keys(taskData).map(taskColumn => {
            return(
              <TaskColumn key={taskColumn}
              name={taskColumn}
              />
            )
          })
        }
      </div>
    </div>
  );

}
