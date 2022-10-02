import React, { useContext } from "react";
import { ToggleContext } from "../../contexts/ToggleContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { List } from "@styled-icons/bootstrap/List";

const SearchMeau = () => {
  const { toggleInfo } = useContext(ToggleContext);

  return (
    <>
      {toggleInfo ? (
        <ToggleMenu>
          <ToggleMenuLink to="/">
            <ToggleMenuIcon />
            <MenuTitle>Coffee</MenuTitle>
          </ToggleMenuLink>
        </ToggleMenu>
      ) : (
        <Menu>
          <MenuLink to="/">
            <ToggleMenuIcon />
            <MenuTitle>Coffee</MenuTitle>
          </MenuLink>
        </Menu>
      )}
    </>
  );
};

const ToggleMenu = styled.div`
  width: 100%;
  height: 30%;
`;

const ToggleMenuLink = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgb(53, 216, 53);
  color: white;
  border: none;
  align-items: center;
  text-decoration: none;
  padding: 20px 0 0 20px;
`;

const ToggleMenuIcon = styled(List)`
  width: 30px;
  height: 30px;
  margin-left: 5px;
`;

const Menu = styled.div`
  width: 150px;
  height: 50px;
  top: 15px;
`;

const MenuLink = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgb(53, 216, 53);
  color: white;
  border: none;
  align-items: center;
  text-decoration: none;
`;

const MenuTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: bold;
  padding: 0px 10px;
`;

export default SearchMeau;
