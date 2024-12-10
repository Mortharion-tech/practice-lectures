/* const tasks = [
  { id: 0, text: 'Buy IPhone' },
  { id: 1, text: 'Buy IPad' },
  { id: 2, text: 'Buy IMac' }
]; */

import { data } from './data.js';

function App() {
/*   const messagesCount = 3; */
  return (
    <div>
{/*       {messagesCount > 0 && <h2>You have messages</h2>} */}
      <ul>
{/*         {tasks.map((task) => <li key={task.id}>{task.text}</li>)} */}
        {data.map(todo =>
          <li key={todo.id}>
            <input type='checkbox' checked={todo.completed} />
            {todo.title}
          </li>)}
      </ul>
    </div>
  );
}

export default App;