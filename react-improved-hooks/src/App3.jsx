import { useState, lazy, Suspense } from "react";

const Admin = lazy(() => import("./Admin.jsx"));

export default function App3() {
  const [page, setPage] = useState(1);
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <div>
      <Profile key={page} page={page} />
      <button onClick={() => setPage(page + 1)}>Next</button>
      {/* Pass loader component inside of fallback */}
      <Suspense fallback={<h2>Loading</h2>}>{isAdmin && <Admin />}</Suspense>
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
