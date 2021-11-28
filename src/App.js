import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="about" element={<div>About</div>} />
    </Routes>
  );
}

export default App;
