import React from "react";
import { Routes, Route } from "react-router-dom";
import MainRoot from "./src/root/MainRoot.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainRoot />}></Route>
    </Routes>
  );
}

export default App;
