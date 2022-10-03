import React from "react";
import KakaoMap from "./KakaoMap";
import Banner from "./Banner";
import Toggle from "./Toggle";
import styled from "styled-components";

const KakaoContainer = () => {
  return (
    <Container>
      <Banner />
      <Toggle />
      <KakaoMap />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;

export default KakaoContainer;
