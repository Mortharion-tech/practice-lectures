import { useRef } from "react";

export default function Block({ children, random }) {
  const componentUpdates = useRef(0);
  return (
    <div className="block">
      <h5>Updates: {componentUpdates.current++}</h5>
      <h6>Random: {random}</h6>
    </div>
  );
}
