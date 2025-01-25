import "./App.css";
import { useToggle } from "./hooks/useToggle";

export default function App() {
  const [isOn, toggle] = useToggle(false);

  return (
    <div>
      <h1>{isOn ? "it is ON" : "it is OFF"}</h1>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
