import { useState } from "react";
import "./App.css";

export default function Dialog() {
  const [isOpened, setIsOpened] = useState(false);

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpened(false);
  };

  return (
    <div className={``}>
      <h2></h2>
      <p></p>
      <div>
        <button onClick={handleClose}>No</button>
        <button onClick={handleClose}>Yes</button>
      </div>
    </div>
  );
}
