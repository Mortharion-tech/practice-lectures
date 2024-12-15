import { useReducer } from 'react';
import AddTodo from './AddTodo';
import TasksList from './TasksList';

function tasksReducer(tasks, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...tasks,
        {
          id: nextId++,
          text: action.text,
          done: false,
        },
      ];
    case 'UPDATE_TODO':
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
      default:
        return tasks;
  }
}

export default function App() {
/*   const [tasks, setTasks] = useState(initialTasks); */
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: 'ADD_TODO',
      text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'UPDATE_TODO',
      task,
    });
  }

  function handleDeleteTask(taskId) {
/*     setTasks(tasks.filter((t) => t.id !== taskId)); */
  }

  return (
    <>
      <h1>TODO App</h1>
      <AddTodo handleAddTask={handleAddTask} />
      <TasksList tasks={tasks} handleChangeTask={handleChangeTask} handleDeleteTask={handleDeleteTask} />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
]