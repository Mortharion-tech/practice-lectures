import { useState } from "react";
/* import Post from "./Post"; */

function Card({ size = 100, children }) {
  return <div style={{
    backgroundColor: 'blue',
    width: size,
    height: size,
    marginBottom: 10
  }}>
    {children}
  </div>
}

function App() {

  const [postId, setPostId] = useState(1);

  return (
    <div>
    {/*   <Post postId={postId} />
      <button onClick={() => setPostId(postId + 1)}>Next Post</button> */}
      <Card>
        <h2>Card 1</h2>
      </Card>
      <Card size={200}>
        <h2>Card 2</h2>
      </Card>
      <Card size={300}>
        <h2>Card 3</h2>
      </Card>
    </div>
  );
}

export default App;