
import { getAllData } from "../data/kanbanData";
import TaskColumn from "./TaskColumn";


export default function KanbanBoard() {
  const taskData = getAllData();
  
  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
      <div className="flex flex-col gap-6 xl:flex-row h-full">
        {
          Object.keys(taskData).map(taskColumn => {
            const tasks = taskData[taskColumn];
            return(
              <TaskColumn key={taskColumn}
              name={taskColumn}
              tasks={tasks}
              />
            )
          })
        }
      </div>
    </div>
  );
}
