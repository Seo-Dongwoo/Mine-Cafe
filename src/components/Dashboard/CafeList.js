import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
import { Table } from "react-bootstrap";
import {
  deleteCafeInitiate,
  getCafesInitiate,
} from "../../redux/Actions/DashboardActions";
import LikeCafe from "./LikeCafe";
import Pagination from "./Pagination";
import styled from "styled-components";

const CafeList = () => {
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const { cafes } = useSelector((state) => state.cafeReducer);
  const { currentUser } = useAuth();
  const dispatch = useDispatch();

  const deleteHandler = (id, user_id) => {
    if (currentUser.uid === user_id) {
      if (window.confirm("추천 카페를 삭제하시겠습니까?")) {
        dispatch(deleteCafeInitiate(id));
      }
    } else {
      alert("삭제 할 수 없습니다.");
    }
  };

  useEffect(() => {
    dispatch(getCafesInitiate());
  }, []);

  return (
    <>
      <TableContent striped bordered hover>
        <thead>
          <tr>
            <HeadItem>번호</HeadItem>
            <HeadItem>카페 이름</HeadItem>
            <HeadItem>카페 주소</HeadItem>
            <HeadItem>추천 이유</HeadItem>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </TableContent>
      <Footer>
        <Pagination
          total={cafes.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </Footer>
    </>
  );
};

const TableContent = styled(Table)`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 825px) {
    display: none;
  }
`;

const HeadItem = styled.th`
  padding: 20px;
  width: 20%;
  font-weight: 600;
  font-size: 20px;

  @media (max-width: 1150px) {
    width: 25%;
    font-size: 17px;
  }
`;

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

const Footer = styled.footer`
  position: fixed;
  bottom: 120px;
  left: 35px;
  width: 100%;

  @media (max-width: 1460px) {
    position: fixed;
    bottom: 80px;
    left: -10px;
    width: 100%;
  }

  @media (max-width: 825px) {
    display: none;
  }
`;

export default CafeList;
