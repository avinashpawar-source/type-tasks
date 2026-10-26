
export type TaskStatus = "todo" | "in-progress" | "done";

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

export function addTask(tasks: Task[], newTask: Task): Task[] {
  return [...tasks, newTask];
}

export function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((t) =>
    t.id === id ? { ...t, status: "done" } : t
  );
}

export function filterByStatus(
  tasks: Task[],
  status: TaskStatus
): Task[] {
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