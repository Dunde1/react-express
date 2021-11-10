import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Sub from "./Sub";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/sub"} element={<Sub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
