import React from "react";
import "../../assets/css/Dashboard/DashboardSidebar.css";
import { GiCoffeeBeans } from "react-icons/gi";
import SidebarMeau from "./SidebarMeau";

const DashboardSidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-brand">
        <GiCoffeeBeans className="brand-icon" />
        <span className="brand-title">COFFEE</span>
      </div>
      <SidebarMeau />
    </div>
  );
};

export default DashboardSidebar;
