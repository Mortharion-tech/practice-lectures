import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import UseStateEx from "./UseStateEx";
import UseEffectEx from "./UseEffectEx";
import UseRefEx from "./UseRefEx";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/useEffectExample" element={
            <>
              <p>Another page</p>
              <Link to="/">Go back</Link>
            </>
          } />
          <Route path="/" element={
            <>
              <h1>React hooks</h1>
            {/*   <UseStateEx /> */}
            {/*   <UseEffectEx /> */}
              <UseRefEx />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}