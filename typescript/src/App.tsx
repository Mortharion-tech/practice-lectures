import { useState } from "react";
import "./App.css";

interface CardProps {
  title: string; //  required prop
  subtitle?: string; //  optional prop
  theme?: "dark" | "light";
  onClose: (value: string) => void; //  function which accepts string & returns nothing
}

export default function Dialog({
  title,
  subtitle,
  theme = "light",
  onClose,
}: CardProps) {
  const [isOpened, setIsOpened] = useState(false); // isOpened now has type boolean assigned

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpened(false);
    onClose(event.currentTarget.innerText); // Call function from props with "Yes" or "No" value
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
