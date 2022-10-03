import React from "react";
import DashboardSection from "./DashboardSection";
import DashboardSidebar from "./DashboardSidebar";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardSidebar />
      <DashboardSection />
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  height: 90%;
  width: 90%;
  border-radius: 2rem;
  background-color: rgba(255, 255, 255, 0.54);
  overflow: hidden;
  display: flex;

  @media (max-width: 1460px) {
    flex-direction: column;
  }
`;

export default Dashboard;
