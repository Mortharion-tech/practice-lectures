import { useState, useCallback, useMemo } from "react";
import "./App.css";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Museum", done: true },
  { id: 1, text: "Watch show", done: false },
  { id: 2, text: "Read", done: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [themeColor, setThemeColor] = useState("#13223d");
  const [filter, setFilter] = useState("all");
  console.time("a");
  const filteredTasks = useMemo(
    () => getFilteredTasks(tasks, filter),
    [tasks, filter]
  );
  console.timeEnd("a");

  const handleAddTodo = (newTodo) => {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: newTodo,
        done: false,
      },
    ]);
  };

  const handleUpdateTodo = useCallback((updatedTask) => {
    setTasks((tasks) =>
      tasks.map((t) => {
        if (t.id === updatedTask.id) {
          return updatedTask;
        } else {
          return t;
        }
      })
    );
  }, []);
  //empty dependency array so function is only created on the 1. render (to keep the same version of this function)

  return (
    <main style={{ backgroundColor: themeColor }}>
      <div className="row">
        Get filtered called <div className="badge">{getFilteredCallsCount}</div>
      </div>
      <h1>TODO App</h1>
      <AddTodo onAdd={handleAddTodo} />
      <div className="filterWrapper">
        <span
          className={filter === "all" ? "selected" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </span>
        <span
          className={filter === "completed" ? "selected" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </span>
        <span
          className={filter === "uncompleted" ? "selected" : ""}
          onClick={() => setFilter("uncompleted")}
        >
          Uncompleted
        </span>
      </div>
      <TodoList tasks={filteredTasks} handleChange={handleUpdateTodo} />
      <input
        type="color"
        value={themeColor}
        onChange={(e) => setThemeColor(e.target.value)}
      />
    </main>
  );
}

let getFilteredCallsCount = 0;
function getFilteredTasks(tasks, filter) {
  getFilteredCallsCount++;
  switch (filter) {
    case "all":
      return tasks;
    case "completed":
      return tasks.filter((task) => task.done);
    case "uncompleted":
      return tasks.filter((task) => !task.done);
    default:
      return tasks;
  }
}
