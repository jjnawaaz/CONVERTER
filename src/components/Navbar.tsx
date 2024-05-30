import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <Link to="/">Your Logo</Link>
        </div>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/description">Description</Link>
          </li>{" "}
          {/* Add link to Description page */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
