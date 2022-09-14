import React, { useState } from "react";
import "../../assets/css/Dashboard/DashboardSidebar.css";
import { GiCoffeeBeans } from "react-icons/gi";
import SidebarMeau from "./SidebarMeau";
import AddCafe from "./AddCafe";

const DashboardSidebar = () => {
  const [addContent, setAddContent] = useState(false);

  const handleToggleClick = () => {
    setAddContent(!addContent);
  };

  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-brand">
        <GiCoffeeBeans className="brand-icon" />
        <span className="brand-title">COFFEE</span>
      </div>
      <SidebarMeau onClick={handleToggleClick} />
      {addContent && <AddCafe onClick={handleToggleClick} />}
    </div>
  );
};

export default DashboardSidebar;
