import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Description from "./pages/Description"; // Import the Description component
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/description" element={<Description />} />{" "}
          {/* Add the route for Description page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
