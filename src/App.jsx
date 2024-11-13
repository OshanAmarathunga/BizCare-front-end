import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./page/home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./page/about-us/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
