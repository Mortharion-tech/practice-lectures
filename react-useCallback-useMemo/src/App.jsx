import { useState } from "react";
import "./App.css";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Museum", done: true },
  { id: 1, text: "Watch show", done: false },
  { id: 2, text: "Read", done: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

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

  const handleUpdateTodo = (updatedTask) => {
    setTasks((tasks) =>
      tasks.map((t) => {
        if (t.id === updatedTask.id) {
          return updatedTask;
        } else {
          return t;
        }
      })
    );
  };

  return (
    <main>
      <h1>TODO App</h1>
      <AddTodo onAdd={handleAddTodo} />
      <TodoList tasks={tasks} handleChange={handleUpdateTodo} />
    </main>
  );
}
