"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
let tasks = [
    { id: 1, title: "Study JavaScript", status: "todo" },
    { id: 2, title: "Build an app", status: "in-progress" },
];
tasks = (0, model_1.addTask)(tasks, {
    id: 3,
    title: "Learn TypeScript",
    status: "todo",
});
tasks = (0, model_1.completeTask)(tasks, 2);
tasks = (0, model_1.completeTask)(tasks, 1);
const completedTasks = (0, model_1.filterByStatus)(tasks, "done");
console.log("Hello");
console.log("All tasks:", tasks);
console.log("Completed tasks:", completedTasks);
