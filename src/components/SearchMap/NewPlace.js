import React from "react";
import styled from "styled-components";
import { Airplane } from "@styled-icons/fluentui-system-filled/Airplane";

const NewPlace = () => {
  return (
    <Container>
      <Title>
        새로운 장소 <TitleIcon />
      </Title>
      <Description>
        새로운 수정된 정보를 알고 계세요? <br />
        장소 제보는 지도 품질 향상에 큰 도움이 됩니다.
      </Description>
      <Registration>신규 장소 등록</Registration>
      <FixMap>지도 정보 수정</FixMap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 55%;
  padding: 15px 0 0 20px;
`;

const Title = styled.h3`
  width: 100%;
  display: flex;
  align-items: center;
`;

const TitleIcon = styled(Airplane)`
  width: 30px;
  margin-left: 5px;
`;

const Description = styled.p`
  font-size: 13px;
  color: rgba(128, 128, 128, 0.87);
`;

const Registration = styled.button`
  width: 90px;
  height: 30px;
  font-size: 11px;
  font-weight: bold;
  margin: 10px 10px 0 0;
  border: none;
  background-color: #35d835;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const FixMap = styled.button`
  width: 90px;
  height: 30px;
  font-size: 11px;
  font-weight: bold;
  border: 1px solid #35d835;
  background-color: white;
  color: #35d835;
  margin: 10px 10px 0 0;
  border-radius: 5px;
  cursor: pointer;
`;

export default NewPlace;
