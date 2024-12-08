import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <h2>{counter}</h2>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;