import React from "react";
import styled from "styled-components";

const SearchNav = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavItemLink>검색</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink>길찾기</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink>버스</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink>지하철</NavItemLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

const Nav = styled.div`
  width: 90%;
  height: 40%;
  margin: 0 auto;
`;

const NavList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  width: 100%;
  height: 100%;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 20px 10px;
`;

const NavItemLink = styled.a`
  display: block;
  width: 60px;
  height: 40px;
  padding-top: 10px;
  text-align: center;
  text-decoration: none;
  color: white;
  &:hover {
    border-radius: 5px;
    background-color: rgb(19, 153, 19);
  }
`;

export default SearchNav;
