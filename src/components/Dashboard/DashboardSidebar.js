import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Dashboard/DashboardSidebar.css";
import { GiCoffeeBeans } from "react-icons/gi";
import SidebarMeau from "./SidebarMeau";
import AddCafe from "./AddCafe";
import { ToggleContext } from "../../contexts/ToggleContext";
import { CgProfile } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const DashboardSidebar = () => {
  const { handleToggle, toggleInfo } = useContext(ToggleContext);

  const meaus = [
    {
      name: "내 정보",
      path: "/my-cafe/profile",
      icon: <CgProfile />,
    },
    { name: "카페 검색", path: "/search-cafe", icon: <BiSearch /> },
    {
      name: "카페 추가",
      path: "/my-cafe",
      icon: <MdOutlineAddCircleOutline />,
    },
  ];

  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-brand">
        <GiCoffeeBeans className="brand-icon" />
        <Link to="/" className="title-link">
          <span className="brand-title">COFFEE</span>
        </Link>
      </div>
      <SidebarMeau meaus={meaus} onClick={handleToggle} />
      {toggleInfo && <AddCafe onClick={handleToggle} />}
    </div>
  );
};

export default DashboardSidebar;
