import { useState } from "react";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="addTodo"
        name="text"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </form>
  );
}
