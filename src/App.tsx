import React from "react";
import { Home } from "../src/page/Home";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
