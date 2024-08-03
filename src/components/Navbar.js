import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav>
      <div className="navbar-left">
        <h1>TODO App</h1>
      </div>
      <div className="navbar-right">
        {isLoggedIn ? (
          <>
            <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          <div style={{ textDecoration: "None" }}>
            <Link to="/register">Register</Link>
            <Link className="link-element" to="/login">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
