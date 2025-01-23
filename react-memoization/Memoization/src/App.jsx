import { useRef, useState } from "react";
import Block from "./Block";
import BlockWithMemo from "./BlockWithMemo";

function App() {
  const [text, setText] = useState("");
  const componentUpdates = useRef(0);
  const [random, setRandom] = useState(0);

  const handleGenerateRandomClick = () => {
    setRandom((Math.random() +1)toString(36).substring(9));
  }

  return (
    <div className="app">
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <h3>Updates: {componentUpdates.current++}</h3>
      <button onClick={handleGenerateRandomClick}>Generate Random</button>
      <div className="row">
        <Block random={random}>
          <Block random={random}>
            <Block random={random} />
            <Block random={random}>
              <Block random={random} />
            </Block>
          </Block>
          <Block random={random} />
        </Block>
        <BlockWithMemo random={random}>
          <BlockWithMemo random={random}>
            <BlockWithMemo random={random} />
            <BlockWithMemo random={random}>
              <BlockWithMemo random={random} />
            </BlockWithMemo>
          </BlockWithMemo>
          <BlockWithMemo random={random} />
        </BlockWithMemo>
      </div>
    </div>
  );
}

export default App;
