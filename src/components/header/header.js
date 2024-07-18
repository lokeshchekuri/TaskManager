import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to="/"className="header-title"><h1>Task Manager App</h1></Link>
      <ul className="nav-links">
        <li>
          <Link to="/show-tasks">Show Tasks</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
