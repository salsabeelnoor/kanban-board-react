import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";

export default function Filter({ columnName }) {
  const [openMenu, setOpenMenu] = useState(null);
  const categories = [
    "Design",
    "Operations",
    "Marketing",
    "Creative",
    "Development",
    "Backend",
    "Setup",
  ];
  const { sortBy, handleSort, columnFilter, handleColumnFilter } =
    useContext(TaskContext);
  const currentFilter = columnFilter[columnName];
  const toggleMenu = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  const handleSortChange = (sortType) => {
    handleSort(sortType);
  };

  const onFilterClick = (category) => {
    handleColumnFilter(columnName, category);
  };
  return (
    <div className="ml-auto flex items-center gap-2">
      <div className="relative">
        <button
          onClick={() => toggleMenu("filter")}
          type="button"
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none"
          data-menu-toggle="todo-filter-menu"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414V19a1 1 0 01-.553.894l-2 1A1 1 0 0110 20v-6.293L3.293 7.293A1 1 0 013 6.586V4z"
            ></path>
          </svg>
          Filter
        </button>
        {openMenu === "filter" && (
          <div
            className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40 ${openMenu === "filter" ? "block" : "hidden"}`}
            id="todo-filter-menu"
            data-menu
          >
            <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Filter by tag
            </p>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onFilterClick(category)}
                type="button"
                className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${
                  currentFilter === category
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : ""
                }`}
              >
                {currentFilter === category && "✓ "}
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="relative">
        <button
          onClick={() => toggleMenu("sort")}
          type="button"
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none"
          data-menu-toggle="todo-sort-menu"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M8 12h12M12 18h8"
            ></path>
          </svg>
          Sort
        </button>
        {openMenu === "sort" && (
          <div
            className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40 ${openMenu === "sort" ? "block" : "hidden"}`}
            id="todo-sort-menu"
            data-menu
          >
            <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Sort by date
            </p>
            <button
              type="button"
              onClick={() => handleSortChange("newest")}
              className="w-full text-left px-4 py-2 hover:bg-gray-50"
            >
              {sortBy === "newest" && "✓ "} Newest first
            </button>
            <button
              type="button"
              onClick={() => handleSortChange("oldest")}
              className="w-full text-left px-4 py-2 hover:bg-gray-50"
            >
              {sortBy === "oldest" && "✓ "}Oldest first
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
