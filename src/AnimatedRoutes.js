import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
