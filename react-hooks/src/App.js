function App() {

  let counter = 1;

  const increment = () => counter = counter + 1;
  const decrement = () => counter = counter - 1;

  return (
    <div>
      <button onClick={decrement}>-</button>
      <h2>{counter}</h2>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;