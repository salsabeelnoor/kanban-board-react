export default function TaskAction({taskName}) {
  return (
    <div
      className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40"
      id={`${taskName}-menu`}
      data-card-menu
    >
      <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
        Move to
      </p>
      <button
        type="button"
        className="w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer"
      >
        In Progress
      </button>
      <button
        type="button"
        className="w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer"
      >
        Done
      </button>
      <div className="border-t border-gray-100 mt-2 pt-2 space-y-1">
        <button
          type="button"
          className="w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer"
        >
          Edit Card
        </button>
        <button
          type="button"
          className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer"
        >
          Delete Card
        </button>
      </div>
    </div>
  );
}
