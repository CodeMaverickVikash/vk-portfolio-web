import "./App.css";
import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // check preSelected color theme
  let preSelectedMode = false;
  if (localStorage.getItem("color-theme") === "dark") {
    preSelectedMode = true;
  }

  const [isDarkModeEnabled, setDarkMode] = useState(preSelectedMode);

  const toggleColorMode = () => {
    setDarkMode((prevState) => !isDarkModeEnabled);
    if (isDarkModeEnabled) {
      localStorage.setItem("color-theme", "light");
      return;
    }
    localStorage.setItem("color-theme", "dark");
  };

  return (
    <div className={`home-wrapper ${isDarkModeEnabled ? "dark" : ""}`}>
      <Router>
        <Navbar onToggle={toggleColorMode} isDarkModeEnabled={isDarkModeEnabled} />
        <Routes>
          <Route exact path="/" element={<Home  />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/blogs" element={<Blogs />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
