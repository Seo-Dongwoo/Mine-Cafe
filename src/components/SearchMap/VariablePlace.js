import React, { useContext, useEffect } from "react";
import "../../assets/css/SearchMap/Toggle/VariablePlace.css";
import { KakaoContext } from "../../contexts/KakaoContext";
import styled from "styled-components";

const VariablePlace = () => {
  const { getMap } = useContext(KakaoContext);

  useEffect(() => {
    getMap();
  }, []);

  return (
    <Container>
      <Title>주변 카페 찾기</Title>
      <div className="category">
        <div id="CE7" data-order="4">
          <span className="category_bg cafe"></span>
          주변 카페 검색
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 25%;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.h3`
  position: absolute;
  padding: 20px;
  width: 100%;
  height: 100%;
`;

export default VariablePlace;
