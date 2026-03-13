const taskColumnListData = [
    {
        "id": crypto.randomUUID(),
        "name" : "To-do"
    },
    {
        "id": crypto.randomUUID(),
        "name" : "In Progress"
    },
    {
        "id": crypto.randomUUID(),
        "name" : "Done"
    }
];
function taskColumnList() {
    return taskColumnListData;
}

export { taskColumnList }