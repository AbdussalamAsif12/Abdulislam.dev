import React from "react";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
          <Route path="/about" element={<About />}> </Route>
        </Routes>
      </BrowserRouter>
      
      
    </>
  );
};

export default App;