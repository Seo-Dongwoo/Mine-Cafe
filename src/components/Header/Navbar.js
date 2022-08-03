import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/Navbar.css";
import { useAuth } from "../../contexts/AuthContext";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [color, setColor] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { logout, currentUser } = useAuth();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      navigate("/");
    } catch {
      setError("로그아웃이 실패하였습니다.");
    }
  };

  useEffect(() => {
    changeNavbarColor();
    showButton();
  }, []);

  window.addEventListener("scroll", changeNavbarColor);
  window.addEventListener("resize", showButton);

  return (
    <>
      {currentUser ? (
        <nav className={color ? "color-navbar" : "navbar"}>
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              Coffee
              <i className="fas fa-coffee"></i>
            </Link>
            <div className="mobile-menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul
              className={click ? "nav-menu active" : "nav-menu"}
              onClick={closeMobileMenu}
            >
              <li className="nav-item">
                <Link to="/" className="nav-item-links">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/search-cafe" className="nav-item-links">
                  Search Cafe
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/my-cafe" className="nav-item-links">
                  My Cafe
                </Link>
              </li>
              <li
                onClick={handleLogout}
                className="nav-links-mobile"
                style={{ cursor: "pointer" }}
              >
                로그아웃
              </li>
            </ul>
            {button && (
              <Button onClick={handleLogout} buttonStyle="btn--outline">
                로그아웃
              </Button>
            )}
          </div>
        </nav>
      ) : (
        <nav className={color ? "color-navbar" : "navbar"}>
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              Coffee
              <i className="fas fa-coffee"></i>
            </Link>
            <div className="mobile-menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul
              className={click ? "nav-menu active" : "nav-menu"}
              onClick={closeMobileMenu}
            >
              <li className="nav-item">
                <Link to="/" className="nav-item-links">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/search-cafe" className="nav-item-links">
                  Search Cafe
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/my-cafe" className="nav-item-links">
                  My Cafe
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-links-mobile">
                  로그인
                </Link>
              </li>
            </ul>
            <Link to="/login">
              {button && <Button buttonStyle="btn--outline">로그인</Button>}
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
