import { useEffect, useState } from "react";

export default function App3() {
  const [page, setPage] = useState(1);

  return (
    <div>
      <Profile key={page} page={page} />
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}

function Profile({ page }) {
  const [comment, setComment] = useState("");

  return (
    <div>
      <h1>Profile on page {page}</h1>
      <input value={comment} onChange={(e) => setComment(e.target.value)} />
    </div>
  );
}
