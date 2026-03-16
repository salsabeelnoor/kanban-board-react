import Filter from "./Filter";
import SingleTask from "./SingleTask";

export default function TaskColumn({ name, tasks }) {
  return (
    <div className="flex-1 flex flex-col min-w-0 w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-gray-900">{ name }</h2>
          <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
            3
          </span>
        </div>

        <Filter />
      </div>

      <div className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
        {
          tasks.map((task, i) => (
            <SingleTask key={i} task={task} taskName={name} />
          ))
        }
      </div>
    </div>
  );
}
