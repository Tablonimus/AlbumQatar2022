import React from "react";
import Home from "./components/Home/Home";
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import AnimatedRoutes from "./AnimatedRoutes";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
     
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
