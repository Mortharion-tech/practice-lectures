import { useRef, memo } from "react";

const BlockWithMemo = memo(
  function Block({ children, random }) {
    const componentUpdates = useRef(0);
    return (
      <div className="block">
        <h5>Updates: {componentUpdates.current++}</h5>
        <h6>Random: {random}</h6>
        {children}
      </div>
    );
  },
  (prevProps, newProps) => {
    return true;
  }
);

export default BlockWithMemo;
