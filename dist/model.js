export function addTask(tasks, newTask) {
    return [...tasks, newTask];
}
export function completeTask(tasks, id) {
    return tasks.map((t) => t.id === id ? { ...t, status: "done" } : t);
}
export function filterByStatus(tasks, status) {
    return tasks.filter((t) => t.status === status);
}
// [{},{2},{}]
// filterByStatus([],'todo')
// completeTask([
//   { id: 1, title: "Study JS", status: "todo" },
//   { id: 2, title: "Build app", status: "in-progress" }
// ],2)
// [
//   { id: 1, title: "Study JS", status: "todo" },
//   { id: 2, title: "Build app", status: "in-progress" }
// ]
