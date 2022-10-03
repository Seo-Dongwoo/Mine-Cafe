import React from "react";
import "../../assets/css/Pages/Mycafe.css";
import Dashboard from "../../components/Dashboard/Dashboard";
import styled from "styled-components";

const MyCafe = () => {
  return (
    <Container>
      <Dashboard />
    </Container>
  );
};

const Container = styled.div`
  background: linear-gradient(
    106.27deg,
    #d8b683 29.63%,
    #a57d4a 51.55%,
    #8a631a 90.85%
  );
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export default MyCafe;
