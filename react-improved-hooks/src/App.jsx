import { useState } from "react";
import "./App.css";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setFirstName("");
    setLastName("");
    setAge("");
    setHeight("");
    setWeight("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name:{" "}
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last name:{" "}
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <label>
        Age: <input value={age} onChange={setAge(e.target.value)} />
      </label>
      <label>
        Height:{" "}
        <input value={height} onChange={(e) => setHeight(e.target.value)} />
      </label>
      <label>
        Weight:{" "}
        <input value={weight} onChange={(e) => setWeight(e.target.value)} />
      </label>
      <input type="submit" />
    </form>
  );
}
