import React from "react";
import styled from "styled-components";

const Pagination = ({ total, page, setPage, limit }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <ListPagination>
      <PaginationBtn onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </PaginationBtn>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <PaginationBtn
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </PaginationBtn>
        ))}
      <PaginationBtn
        onClick={() => setPage(page + 1)}
        disabled={page === numPages}
      >
        &gt;
      </PaginationBtn>
    </ListPagination>
  );
};

const ListPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const PaginationBtn = styled.button`
  width: 30px;
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;
  &:hover {
    background: #d8b683 29.63%;
    cursor: pointer;
    transform: translateY(-2px);
  }
  &[disabled] {
    background: #a57d4a 51.55%;
    cursor: revert;
    transform: revert;
  }
  &[aria-current] {
    background: #8a631a 90.85%;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
