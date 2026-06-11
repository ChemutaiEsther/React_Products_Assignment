import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2026 My Shop. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;