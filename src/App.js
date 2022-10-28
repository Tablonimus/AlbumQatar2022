import React from "react";
import Home from "./components/Home/Home";
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
function App() {
  // const  history = createBrowserHistory();
  return (
    <BrowserRouter>
      <Routes /*  history={history} */>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
