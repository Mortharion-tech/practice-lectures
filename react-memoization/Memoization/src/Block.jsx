import { useRef } from "react";

export default function Block({ children, number }) {
  const componentUpdates = useRef(0);
  return (
    <div className="block">
      <h5>Updates: {componentUpdates.current++}</h5>
      {children}
    </div>
  );
}
