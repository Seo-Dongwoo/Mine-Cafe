import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const SidebarMeau = ({ onClick }) => {
  return (
    <SideBar>
      <ItemLink to="/my-cafe/profile">
        <ItemBox>
          <CgProfile style={{ width: "40px", height: "40px" }} />
          <ItemTitle>내 정보</ItemTitle>
        </ItemBox>
      </ItemLink>
      <ItemLink to="/search-cafe">
        <ItemBox>
          <BiSearch style={{ width: "40px", height: "40px" }} />
          <ItemTitle>카페 검색</ItemTitle>
        </ItemBox>
      </ItemLink>
      <ItemLink to="/my-cafe">
        <ItemBox>
          <MdOutlineAddCircleOutline
            style={{ width: "40px", height: "40px" }}
          />
          <ItemTitle onClick={onClick}>카페 추가</ItemTitle>
        </ItemBox>
      </ItemLink>
    </SideBar>
  );
};

const SideBar = styled.ul`
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 1460px) {
    width: 80%;
    display: flex;
  }
`;

const ItemLink = styled(NavLink)`
  width: 100%;
  padding: 10px;
  display: flex;
  color: gray;
  text-decoration: none;
`;

const ItemBox = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 30px;
  line-height: 60px;
  height: 60px;
  gap: 1rem;

  &svg {
    width: 15%;
  }

  &:hover {
    background-color: #ffc107;
    border-radius: 1rem;
  }

  @media (max-width: 1460px) {
    height: 90%;
    padding: 0;
    justify-content: center;
    gap: 0.8rem;

    &svg {
      width: 20%;
    }
  }
  @media (max-width: 590px) {
    width: 100%;
    height: 60%;
  }
`;

const ItemTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 1460px) {
    font-size: 1.2rem;
  }

  @media (max-width: 590px) {
    font-size: 0.9rem;
  }
`;

export default SidebarMeau;
