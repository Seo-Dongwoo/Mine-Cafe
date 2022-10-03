import React from "react";
import SectionCard from "./SectionCard";
import styled from "styled-components";

const DashboardSection = () => {
  return (
    <Section>
      <Title>
        <SubTitle>Welcome to</SubTitle>
        <h1>DashBoard</h1>
      </Title>
      <Cards>
        <SectionCard />
      </Cards>
    </Section>
  );
};

const Section = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  height: 10%;
  font-family: "Permanent Marker";
  color: #ffc107;
  margin: 30px 0 0 30px;

  @media (max-width: 1460px) {
    display: none;
  }
`;

const SubTitle = styled.h4`
  color: orange;
`;

const Cards = styled.div`
  width: 90%;
  height: 82%;
  display: grid;
  padding: 2rem;
  @media (max-width: 1460px) {
    width: 100%;
    height: 100%;
  }
`;

export default DashboardSection;
