const categoryStyles = {
  "Design": {
    backgroundColor: "bg-blue-100",
    textColor: "text-blue-700",
  },
  "Operations": {
    backgroundColor: "bg-yellow-100",
    textColor: "text-yellow-700",
  },
  "Marketing": {
    backgroundColor: "bg-green-100",
    textColor: "text-green-700",
  },
  "Creative": {
    backgroundColor: "bg-purple-100",
    textColor: "text-purple-700",
  },
  "Development": {
    backgroundColor: "bg-indigo-100",
    textColor: "text-indigo-700",
  },
  "Backend": {
    backgroundColor: "bg-red-100",
    textColor: "text-red-700",
  },
  "Setup": {
    backgroundColor: "bg-lime-100",
    textColor: "text-lime-700",
  },
  "Infrastructure": {
    backgroundColor: "bg-sky-100",
    textColor: "text-sky-700",
  },
  "Documentation": {
    backgroundColor: "bg-cyan-100",
    textColor: "text-cyan-700",
  },
  // Add a default style for any category not listed above
  "Default": {
    backgroundColor: "bg-gray-100",
    textColor: "text-gray-700",
  }
};
const boardData = {
    "To-do": [
        {
            "id": crypto.randomUUID(),
            "name": "Wireframes",
            "description": "Set up high-fidelity prototypes with conditional logic",
            "category": "Design",
        },
        {
            "id": crypto.randomUUID(),
            "name": "Data Entry",
            "description": "Data Entry Cleanup and validation",
            "category": "Operations",
        },
        {
            "id": crypto.randomUUID(),
            "name": "Social Media",
            "description": "Social Media Scheduling and posting",
            "category": "Marketing",
        },
    ],
    "In Progress" : [
        {
            "id": crypto.randomUUID(),
            "name": "Graphic Design",
            "description": "Graphic Design Edits and refinements",
            "category": "Creative",
        },
        {
            "id": crypto.randomUUID(),
            "name": "Presentation",
            "description": "Presentation Slide Design",
            "category": "Development",
        },
        {
            "id": crypto.randomUUID(),
            "name": "API Integration",
            "description": "Integrate payment gateway APIs",
            "category": "Backend",
        },
    ],
    "Done" : [
        {
            "id": crypto.randomUUID(),
            "name": "Software Installation",
            "description": "Install and configure development tools",
            "category": "Setup",
        },
        {
            "id": crypto.randomUUID(),
            "name": "Database Design",
            "description": "Database schema and optimization",
            "category": "Infrastructure",
        },
        {
            "id": crypto.randomUUID(),
            "name": "Documentation",
            "description": "Complete API documentation",
            "category": "Documentation",
        },
    ]
}

function getAllData() {
    return boardData
}
 
export { getAllData, categoryStyles }