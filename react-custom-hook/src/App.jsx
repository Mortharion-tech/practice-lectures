import { useState } from "react";
import "./App.css";

export default function App() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn((x) => !x);

  return (
    <div>
      <h1>{isOn ? "it is ON" : "it is OFF"}</h1>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
