import { useRef, useState } from "react";
import Block from "./Block";
import BlockWithMemo from "./BlockWithMemo";

function App() {
  const [text, setText] = useState("");
  const componentUpdates = useRef(0);

  return (
    <div className="app">
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <h3>Updates: {componentUpdates.current++}</h3>
      <div className="row">
        <Block>
          <Block>
            <Block />
            <Block>
              <Block />
            </Block>
          </Block>
          <Block />
        </Block>
        <BlockWithMemo>
          <BlockWithMemo>
            <BlockWithMemo />
            <BlockWithMemo>
              <BlockWithMemo />
            </BlockWithMemo>
          </BlockWithMemo>
          <BlockWithMemo />
        </BlockWithMemo>
      </div>
    </div>
  );
}

export default App;
