import { useRef, memo } from "react";

const BlockWithMemo = memo(
  function Block({ children }) {
    const componentUpdates = useRef(0);
    return (
      <div className="block">
        <h5>Updates: {componentUpdates.current++}</h5>
        {children}
      </div>
    );
  },
  (prevProps, newProps) => {
    return true;
  }
);

export default BlockWithMemo;
