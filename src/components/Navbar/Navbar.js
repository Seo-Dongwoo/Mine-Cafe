import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h3 className="logo">Logo</h3>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(!isMobile)}
      >
        <Link to="/" className="home">
          <li>Home</li>
        </Link>
        <Link to="/login" className="login1">
          <li>로그인1</li>
        </Link>
        <Link to="/login" className="login1">
          <li>로그인1</li>
        </Link>
        <Link to="/signup" className="signup">
          <li>회원가입</li>
        </Link>
      </ul>
      <button
        className="mobile-meau-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
