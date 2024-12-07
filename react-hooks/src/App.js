function App() {

  let counter = 0;

  const increment = () => counter = counter + 1;
  const decrement = () => counter = counter - 1;

  return (
    <div>
      <button>-</button>
      <h2>{counter}</h2>
      <button>+</button>
    </div>
  );
}

export default App;
