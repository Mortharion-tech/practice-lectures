import { useState } from "react";
import "./App.css";

export default function Dialog({ title, subtitle }) {
  const [isOpened, setIsOpened] = useState(false);

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpened(false);
  };

  if (!isOpened) return null;

  return (
    <div className={``}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div>
        <button onClick={handleClose}>No</button>
        <button onClick={handleClose}>Yes</button>
      </div>
    </div>
  );
}
