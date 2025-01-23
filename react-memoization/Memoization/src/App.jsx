import { useRef, useState } from "react";

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
      </div>
    </div>
  );
}

export default App;
