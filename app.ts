import {
    addTask,
    completeTask,
    filterByStatus
} from "./model.js"

import type {Task, TaskStatus} from "./model.js"

const form = document.getElementById("task-form") as HTMLFormElement;
const titleInput = document.getElementById("task-title") as HTMLInputElement;
const statusInput = document.getElementById("task-status") as HTMLSelectElement;
const filterInput = document.getElementById("filter-status") as HTMLSelectElement;
const taskList = document.getElementById("task-list") as HTMLUListElement;
const taskCount = document.getElementById("task-count") as HTMLParagraphElement;

let tasks: Task[] = [];
let nextId = 1;

function render(): void {
  const selectedStatus = filterInput.value;
  let visibleTasks: Task[];

  if (selectedStatus === "all") {
    visibleTasks = tasks;
  } else {
    visibleTasks = filterByStatus(tasks, selectedStatus as TaskStatus);
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
        tasks = completeTask(tasks, task.id);
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

  const newTask: Task = {
    id: nextId,
    title: title,
    status: statusInput.value as TaskStatus
  };

  tasks = addTask(tasks, newTask);
  nextId++;

  titleInput.value = "";
  render();
});

filterInput.addEventListener("change", render);

render();
console.log('Hello')