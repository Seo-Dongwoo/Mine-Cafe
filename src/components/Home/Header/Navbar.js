import React, { useState, useEffect } from "react";
import { Button } from "../../Common/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import "../../../assets/css/Navbar.css";
import { useAuth } from "../../../contexts/AuthContext";
import styled from "styled-components";
import { Coffee } from "@styled-icons/boxicons-regular/Coffee";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
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
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      {currentUser ? (
        <NavbarWrap>
          <NavbarContainer>
            <NavbarLink to="/" onClick={closeMobileMenu}>
              <CoffeeIcon />
              Coffee
            </NavbarLink>
            <MobileIcon onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </MobileIcon>
            <NavMenu
              className={click ? "nav-menu active" : "nav-menu"}
              onClick={closeMobileMenu}
            >
              <NavItem>
                <NavItemLink to="/">Home</NavItemLink>
              </NavItem>
              <NavItem>
                <NavItemLink to="/search-cafe">Search Cafe</NavItemLink>
              </NavItem>
              <NavItem>
                <NavItemLink to="/my-cafe">My Cafe</NavItemLink>
              </NavItem>
              <NavLinkMobileLi onClick={handleLogout}>로그아웃</NavLinkMobileLi>
            </NavMenu>
            {button && (
              <Button onClick={handleLogout} buttonStyle="btn--outline">
                로그아웃
              </Button>
            )}
          </NavbarContainer>
        </NavbarWrap>
      ) : (
        <NavbarWrap>
          <NavbarContainer>
            <NavbarLink to="/" onClick={closeMobileMenu}>
              <CoffeeIcon />
              Coffee
            </NavbarLink>
            <MobileIcon onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </MobileIcon>
            <NavMenu
              className={click ? "nav-menu active" : "nav-menu"}
              onClick={closeMobileMenu}
            >
              <NavItem>
                <NavItemLink to="/">Home</NavItemLink>
              </NavItem>
              <NavItem>
                <NavItemLink to="/search-cafe">Search Cafe</NavItemLink>
              </NavItem>
              <NavItem>
                <NavItemLink to="/my-cafe">My Cafe</NavItemLink>
              </NavItem>
              <NavItem>
                <NavLinkMobile to="/login">로그인</NavLinkMobile>
              </NavItem>
            </NavMenu>
            <Link to="/login">
              {button && <Button buttonStyle="btn--outline">로그인</Button>}
            </Link>
          </NavbarContainer>
        </NavbarWrap>
      )}
    </>
  );
}

const NavbarWrap = styled.nav`
  position: fixed;
  /* background: linear-gradient(90deg, black 0%, rgb(26, 23, 23) 100%); */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  font-family: "Merriweather", serif;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    background: #242222;
  }
`;

const NavbarLink = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  @media screen and (max-width: 960px) {
    position: absolute;
    padding-top: 5px;
    top: 0;
    left: 0;
    transform: translate(25%, 50%);
  }
`;

const CoffeeIcon = styled(Coffee)`
  width: 33px;
  margin-right: 10px;
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul``;

const NavItem = styled.li`
  height: 80px;
`;

const NavItemLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
    border-bottom: 4px solid #fff;
    transition: all 0.2s ease-out;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #242424;
      background-color: #fff;
      border-radius: 0;
    }
  }
`;

const NavLinkMobile = styled(Link)`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    text-align: center;
    margin: 2rem auto;
    border-radius: 4px;
    width: 80%;
    text-decoration: none;
    font-size: 1.5rem;
    background-color: transparent;
    color: #fff;
    padding: 14px 20px;
    border: 1px solid #fff;
    transition: all 0.3s ease-out;
    &:hover {
      color: black;
      background: #fff;
      color: #242424;
      transition: 250ms;
    }
  }
`;

const NavLinkMobileLi = styled.li`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    display: block;
    text-align: center;
    margin: 2rem auto;
    border-radius: 4px;
    width: 80%;
    text-decoration: none;
    font-size: 1.5rem;
    background-color: transparent;
    color: #fff;
    padding: 14px 20px;
    border: 1px solid #fff;
    transition: all 0.3s ease-out;
    &:hover {
      background: #fff;
      color: #242424;
      transition: 250ms;
    }
  }
`;

export default Navbar;
