import { useState } from "react";

function ChildComponent({ action, item }) {
  console.log("ChildComponent rendered");
  return (
    <div>
      <button onClick={() => action(item.id)}>Remove {item.name}</button>
    </div>
  );
}

function ParentComponent() {
  const [items, setItems] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
  ]);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  console.log("ParentComponent rendered");

  return (
    <div>
      {items.map((item) => (
        <ChildComponent key={item.id} action={removeItem} item={item} />
      ))}
    </div>
  );
}

export default ParentComponent;
