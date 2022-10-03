import React from "react";
import CafeList from "./CafeList";
import styled from "styled-components";

const SectionCard = () => {
  return (
    <Section>
      <CafeList />
    </Section>
  );
};

const Section = styled.div`
  width: 90%;
  border-radius: 2rem;
  background: rgba(241, 223, 183, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);
  @media (max-width: 1460px) {
    width: 80%;
    height: 100%;
    align-items: center;
    margin: 0 auto;
  }
`;

export default SectionCard;
