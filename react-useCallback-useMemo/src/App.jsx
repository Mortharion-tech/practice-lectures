import { useState, useCallback } from "react";
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
    //empty dependency array so function is only created on the 1. render (to keep the same version of this function)
  }, []);

  return (
    <main>
      <h1>TODO App</h1>
      <AddTodo onAdd={handleAddTodo} />
      <TodoList tasks={tasks} handleChange={handleUpdateTodo} />
    </main>
  );
}
