import { useState } from "react";
import "./App.css";

export default function Dialog({ title, subtitle, theme = "light", onClose }) {
  const [isOpened, setIsOpened] = useState(false);

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpened(false);
    onClose(event.currentTarget.innerText);
  };

  if (!isOpened) return null;

  return (
    <div className={`card-${theme}`}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div>
        <button onClick={handleClose}>No</button>
        <button onClick={handleClose}>Yes</button>
      </div>
    </div>
  );
}
