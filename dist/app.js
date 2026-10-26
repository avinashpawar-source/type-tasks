"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const form = document.getElementById("task-form");
const titleInput = document.getElementById("task-title");
const statusInput = document.getElementById("task-status");
const filterInput = document.getElementById("filter-status");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");
let tasks = [];
let nextId = 1;
function render() {
    const selectedStatus = filterInput.value;
    let visibleTasks;
    if (selectedStatus === "all") {
        visibleTasks = tasks;
    }
    else {
        visibleTasks = (0, model_1.filterByStatus)(tasks, selectedStatus);
    }
    taskList.innerHTML = "";
    visibleTasks.forEach((task) => {
        const item = document.createElement("li");
        const title = document.createElement("span");
        const status = document.createElement("span");
        const button = document.createElement("button");
        title.textContent = task.title;
        status.textContent = ` — ${task.status}`;
        item.append(title, status);
        if (task.status !== "done") {
            button.textContent = "Mark as done";
            button.addEventListener("click", () => {
                tasks = (0, model_1.completeTask)(tasks, task.id);
                render();
            });
            item.appendChild(button);
        }
        taskList.appendChild(item);
    });
    taskCount.textContent = `Tasks: ${tasks.length}`;
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = titleInput.value.trim();
    if (title === "") {
        return;
    }
    const newTask = {
        id: nextId,
        title: title,
        status: statusInput.value
    };
    tasks = (0, model_1.addTask)(tasks, newTask);
    nextId++;
    titleInput.value = "";
    render();
});
filterInput.addEventListener("change", render);
render();
