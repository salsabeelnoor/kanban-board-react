import { categoryStyles } from "../data/kanbanData";
import { useState } from "react";
import TaskAction from "./TaskAction";
import TaskContext from "../context/TaskContext";
import { useContext } from "react";
export default function SingleTask({ taskId, columnName }) {

  const { state } = useContext(TaskContext);
  const task = state[columnName].find((task) => task.id === taskId);
  console.log("task", task);
  const [isOpenActionMenu, setIsOpenActionMenu] = useState(false);
  const style = categoryStyles[task.category] || categoryStyles.Default;
  
  return (
    <div
      className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow relative"
      data-card={task.name}
      data-column={columnName}
    >
      <div
        className="absolute top-4 right-4 text-gray-500"
        data-card-menu-container
      >
        <button
          type="button"
          onClick={() => setIsOpenActionMenu((prev) => !prev)}
          className="p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
          data-card-menu-toggle={`${task.name}-menu`}
          aria-label="Open card menu"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 3a1.25 1.25 0 110-2.5A1.25 1.25 0 018 3zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
          </svg>
        </button>
        {isOpenActionMenu && <TaskAction taskName={task.name} />}
      </div>
      <div className="mb-3">
        <h3 className="font-semibold text-gray-900 text-sm">{task.name}</h3>
      </div>
      <p className="text-xs text-gray-600 mb-4">{task.description}</p>
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`inline-block px-2.5 py-1 text-xs font-medium rounded ${style.backgroundColor} ${style.textColor}`}
        >
          {task.category}
        </span>
      </div>
      <div className="flex items-center gap-1 text-xs text-gray-500">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
        Aug 26
      </div>
    </div>
  );
}
