import React from "react";
import { Link } from "react-router-dom";
// import logo from "./logo.svg";
export default function Navbar() {
  return (
    <nav className="navbar stocky-top">
      <div className="nav-center">
        <Link to="/">
          <img src='./logo.svg' alt="cocktail db logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
