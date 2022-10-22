import React, { memo } from "react";
import styled from "styled-components";
import LikeCafe from "./LikeCafe";

const CafeListItem = ({ cafes, offset, limit, deleteHandler }) => {
  return (
    <>
      {cafes.slice(offset, offset + limit).map((cafe, index) => {
        return (
          <Body key={cafe.id}>
            <BodyItem>{index + 1}</BodyItem>
            <BodyItem>{cafe.place_name}</BodyItem>
            <BodyItem>{cafe.address_name}</BodyItem>
            <BodyItem>{cafe.reason}</BodyItem>
            <ListBtnBox>
              <LikeCafe cafe={cafe} />
              <Delete onClick={() => deleteHandler(cafe.id, cafe.user_id)}>
                Delete
              </Delete>
            </ListBtnBox>
          </Body>
        );
      })}
    </>
  );
};

const Body = styled.tr`
  height: 80px;
`;

const BodyItem = styled.td`
  padding: 3px;
`;

const ListBtnBox = styled.td`
  width: 200px;
  height: 50px;
  display: flex;
  @media (max-width: 1150px) {
    width: 200px;
  }
`;

const Delete = styled.button`
  width: 40%;
  height: 40px;
  display: inline-block;
  margin: 0 auto;
  display: inline-block;
  top: 50%;
  transform: translateY(40%);
  border: none;
  color: white;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  background-color: orange;
  cursor: pointer;

  @media (max-width: 1150px) {
    margin: 5px 5px;
  }
`;

export default memo(CafeListItem);
