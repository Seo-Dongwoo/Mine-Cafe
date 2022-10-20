import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SidebarMeau from "./SidebarMeau";
import AddCafe from "./AddCafe";
import { ToggleContext } from "../../contexts/ToggleContext";

import styled from "styled-components";
import { Coffee } from "@styled-icons/boxicons-regular/Coffee";

const DashboardSidebar = () => {
  const { handleToggle, toggleInfo } = useContext(ToggleContext);

  return (
    <SideBar>
      <Brand>
        <BrandIcon />
        <TitleLink to="/">
          <Title>Mine</Title>
        </TitleLink>
      </Brand>
      <SidebarMeau onClick={handleToggle} />
      {toggleInfo && <AddCafe onClick={handleToggle} />}
    </SideBar>
  );
};

const SideBar = styled.div`
  width: 400px;
  height: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1460px) {
    width: 100%;
    height: 20%;
  }

  @media (max-width: 590px) {
    width: 100%;
    height: 17%;
  }
`;

const Brand = styled.div`
  width: 100%;
  height: 15%;
  font-family: "Permanent Marker";
  color: #ffc107;
  display: flex;
  align-items: center;
  padding: 60px 40px 40px 40px;
  gap: 0.5rem;
  @media (max-width: 1460px) {
    padding: 50px 60px;
  }
`;

const BrandIcon = styled(Coffee)`
  width: 35px;
  margin-bottom: 5px;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: #ffc107;
`;

const Title = styled.span`
  font-size: 2rem;
`;

export default DashboardSidebar;
