import { addTask, completeTask, filterByStatus, Task } from "./model";

let tasks: Task[] = [
  { id: 1, title: "Study JavaScript", status: "todo" },
  { id: 2, title: "Build an app", status: "in-progress" },
];

tasks = addTask(tasks, {
  id: 3,
  title: "Learn TypeScript",
  status: "todo",
});
tasks = completeTask(tasks,2);
tasks = completeTask(tasks, 1);


const completedTasks = filterByStatus(tasks, "done");
console.log("Hello")
console.log("All tasks:", tasks);
console.log("Completed tasks:", completedTasks);
