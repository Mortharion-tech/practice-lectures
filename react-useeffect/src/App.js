import { useState } from "react";
import Post from "./Post";

function App() {
  const [postId, setPostId] = useState(1);

  return (
    <div>
      <Post postId={postId} />
      <button onClick={() => setPostId(postId + 1)}>Next Post</button>
    </div>
  );
}

export default App;