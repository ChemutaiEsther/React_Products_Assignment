import React from "react";
import { Link, useNavigate } from "react-router";
import "../App.css";

function Navbar({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">My Shop</Link>
        <ul className="nav-list">
          {!isLoggedIn && (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              </li>
            </>
          )}
          {isLoggedIn && (
            <>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <button onClick={handleLogout} className="nav-link nav-logout">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;