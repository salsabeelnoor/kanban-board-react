import TaskContext from "../context/TaskContext";
import { useContext, useState } from "react";
export default function EditForm({onClose, task, columnName}) {
  const { categoryStyles, state: tasks, dispatch } = useContext(TaskContext);

  const [formData, setFormData] = useState({
    title: task.name,
    description: task.description,
    category: task.category,
    status: columnName,
    dueDate: "",
  })

  const handleChange = (e) => {

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      title: "",
      description: "",
      category: Object.keys(categoryStyles)[0],
      status: Object.keys(tasks)[0],
      dueDate: "",
    })
    onClose({preventDefault: () => {}});
  }


  return (
    <div className="bg-gray-50 min-h-screen w-full absolute left-0 top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 py-10 sm:py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <a href="" onClick={(e) => onClose(e)}
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                ></path>
              </svg>
              Back to board
            </a>

            <h1 className="text-3xl font-bold text-gray-900 mt-8">Edit Task</h1>
            <p className="text-sm text-gray-500">
              Update the details of your task.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label
                  for="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Task Title
                </label>
                <input onChange={handleChange}
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  placeholder="e.g. Wireframes"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  for="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Task Subtitle / Description
                </label>
                <input onChange={handleChange}
                  id="description"
                  name="description"
                  value={formData.description}
                  placeholder="Add context or acceptance criteria"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  for="tag"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tag
                </label>
                <select onChange={handleChange}
                  id="tag"
                  name="category"
                  value={formData.category}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                >
                  {
                    
                    Object.keys(categoryStyles).map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))
                  }
                </select>
              </div>

              <div>
                <label
                  for="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Due Date
                </label>
                <input onChange={handleChange}
                  type="date"
                  id="date"
                  name="date"
                  value={formData.dueDate}
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                />
              </div>

              <div>
                <label
                  for="status"
                  className="block text-sm font-medium text-gray-700"
                >
                  Status
                </label>
                <select onChange={handleChange}
                  id="status"
                  name="status"
                  value={formData.status}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                >
                  {
                    Object.keys(tasks).map((status) => (
                      <option key={status} value={status}>{status}</option>
                    ))
                  }
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <a onClick={(e) => onClose(e)}
                href=""
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </a>
              <button
                type="submit" 
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
