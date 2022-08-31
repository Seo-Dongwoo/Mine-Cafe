import React from "react";
import "../../assets/css/Dashboard/Dashboard.css";
import DashboardSection from "./DashboardSection";
import DashboardSidebar from "./DashboardSidebar";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DashboardSidebar />
      <DashboardSection />
    </div>
  );
};

export default Dashboard;
