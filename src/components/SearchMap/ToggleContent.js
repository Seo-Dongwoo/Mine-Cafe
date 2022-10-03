import React, { useContext } from "react";
import { KakaoContext } from "../../contexts/KakaoContext";
import GetWeather from "./GetWeather";
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";
import SearchMenu from "./SearchMenu";
import SearchNav from "./SearchNav";
import NewPlace from "./NewPlace";
import VariablePlace from "./VariablePlace";
import styled from "styled-components";

const ToggleContent = () => {
  const { Place } = useContext(KakaoContext);

  return (
    <Content>
      <Header>
        <SearchMenu />
        <SearchInput />
        <SearchNav />
      </Header>
      <Body>
        <>
          {Place ? (
            <SearchList />
          ) : (
            <>
              <GetWeather />
              <VariablePlace />
              <NewPlace />
            </>
          )}
        </>
      </Body>
      <Footer>
        <Link href="#">고객센터</Link>
        <Link href="#">지도 정보 수정</Link>
        <Link href="#">신규 장소 등록</Link>
      </Footer>
    </Content>
  );
};

const Content = styled.div`
  position: absolute;
  width: 400px;
  height: 100%;
  z-index: 15;
`;

const Header = styled.div`
  width: 100%;
  height: 20%;
  background-color: rgb(53, 216, 53);
`;

const Body = styled.div`
  width: 100%;
  height: 76%;
  background-color: white;
`;

const Footer = styled.div`
  width: 100%;
  height: 4%;
  display: flex;
  font-size: 12px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  line-height: 22px;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
  display: block;
  padding: 0 10px;
  text-decoration: none;
  color: #888;
`;
export default ToggleContent;
