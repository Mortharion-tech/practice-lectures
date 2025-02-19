import { useState } from "react";

const initialTasks = [
  { id: 0, text: "Buy Potato" },
  { id: 1, text: "Buy Cucumber" },
  { id: 2, text: "Buy Salad" },
];

export default function App2() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTaskId, setSelectedTaskId] = useState(initialTasks[0]?.id);
  const selectedTask = tasks.find((task) => task.id === selectedTaskId);

  function handleItemChane(id, e) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            text: e.target.value,
          };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div>
      <h1>Selected: {selectedTask.text}</h1>
      {tasks.map((task) => (
        <div>
          <input
            value={task.text}
            onChange={(e) => {
              handleItemChane(task.id, e);
            }}
          />
          <button onClick={() => setSelectedTaskId(task.id)}>Select</button>
        </div>
      ))}
    </div>
  );
}
