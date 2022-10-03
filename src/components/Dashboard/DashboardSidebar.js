import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SidebarMeau from "./SidebarMeau";
import AddCafe from "./AddCafe";
import { ToggleContext } from "../../contexts/ToggleContext";
import { CgProfile } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import styled from "styled-components";
import { Coffee } from "@styled-icons/boxicons-regular/Coffee";

const DashboardSidebar = () => {
  const { handleToggle, toggleInfo } = useContext(ToggleContext);

  const meaus = [
    {
      name: "내 정보",
      path: "/my-cafe/profile",
      icon: <CgProfile style={{ width: "40px", height: "40px" }} />,
    },
    {
      name: "카페 검색",
      path: "/search-cafe",
      icon: <BiSearch style={{ width: "40px", height: "40px" }} />,
    },
    {
      name: "카페 추가",
      path: "/my-cafe",
      icon: (
        <MdOutlineAddCircleOutline style={{ width: "40px", height: "40px" }} />
      ),
    },
  ];

  return (
    <SideBar>
      <Brand>
        <BrandIcon />
        <TitleLink to="/">
          <Title>COFFEE</Title>
        </TitleLink>
      </Brand>
      <SidebarMeau meaus={meaus} onClick={handleToggle} />
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
