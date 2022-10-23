import React, { useContext, useEffect, useState } from "react";
import "../../assets/css/SearchMap/Toggle/SearchList.css";
import { KakaoContext } from "../../contexts/KakaoContext";
import { useAuth } from "../../contexts/AuthContext";
import AddCafeModal from "./AddCafeModal";
import styled from "styled-components";

const SearchList = () => {
  const { Places } = useContext(KakaoContext);
  const { currentUser } = useAuth();
  const [modal, setModal] = useState({
    content: {},
    open: false,
  });

  const onModalHandler = (content) => {
    setModal({
      content: content,
      open: !modal.open,
    });
  };

  useEffect(() => {}, [Places]);

  return (
    <ResultList>
      {Places.map((item, i) => (
        <ResultItem key={item.id}>
          <Title>
            <Number>{i + 1}</Number>
            <TitleLink target="_blank" href={item.place_url} rel="noreferrer">
              <h3>{item.place_name}</h3>
            </TitleLink>
          </Title>
          <div>
            {item.road_address_name ? (
              <div>
                <span>{item.road_address_name}</span>
              </div>
            ) : (
              <span>{item.address_name}</span>
            )}
          </div>
          <PhoneNumber>
            <span>{item.phone}</span>
          </PhoneNumber>
          {currentUser ? (
            <ModalBtn onClick={() => onModalHandler(item)}>
              <ModalBtnName>카페 추가</ModalBtnName>
            </ModalBtn>
          ) : null}

          {modal.open === true ? (
            <AddCafeModal modal={modal} setModal={setModal} />
          ) : null}
        </ResultItem>
      ))}
      <div id="pagination"></div>
    </ResultList>
  );
};

const ResultList = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const ResultItem = styled.div`
  padding: 15px 0 0 15px;
  height: 20%;
  &:hover {
    background-color: #eff7ff;
  }
`;

const Title = styled.div`
  cursor: pointer;
  display: flex;
  padding-bottom: 5px;
`;

const Number = styled.h4`
  padding-right: 10px;
`;

const TitleLink = styled.a`
  text-decoration: none;
  color: black;
`;

const PhoneNumber = styled.div`
  margin-top: 3px;
  color: gray;
  font-weight: bold;
`;

const ModalBtn = styled.button`
  width: 200px;
  height: 30px;
  margin-top: 10px;
  color: black;
  background-color: white;
  border-radius: 15px;
  border: 2px solid #a9a9a9;
  cursor: pointer;
  &:hover {
    background-color: #a9a9a9;
    color: white;
  }
`;

const ModalBtnName = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

export default SearchList;
