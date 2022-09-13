import React from "react";
import "../../assets/css/Dashboard/DashboardSection.css";
import SectionCard from "./SectionCard";

const DashboardSection = () => {
  return (
    <div className="dashboard-section">
      <div className="section-title">
        <h4>Welcome to</h4>
        <h1>DashBoard</h1>
      </div>
      <div className="cards-container">
        <SectionCard />
      </div>
    </div>
  );
};

export default DashboardSection;
