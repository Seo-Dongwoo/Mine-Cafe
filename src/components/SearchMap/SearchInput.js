import React, { useContext } from "react";
import { KakaoContext } from "../../contexts/KakaoContext";
import { ToggleContext } from "../../contexts/ToggleContext";
import styled from "styled-components";

const SearchInput = () => {
  const { handleSubmit, onChange, inputText } = useContext(KakaoContext);
  const { toggleInfo } = useContext(ToggleContext);

  return (
    <>
      {toggleInfo ? (
        <ToggleSearch onSubmit={handleSubmit}>
          <ToggleSearchInput
            placeholder="내 장소 및 카페 검색"
            onChange={onChange}
            value={inputText}
          />
        </ToggleSearch>
      ) : (
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormInput
            placeholder="내 장소 및 카페 검색"
            onChange={onChange}
            value={inputText}
          />
        </SearchForm>
      )}
    </>
  );
};

const ToggleSearch = styled.form`
  width: 90%;
  height: 25%;
  margin: auto;
  margin-top: 10px;
`;

const ToggleSearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(128, 128, 128, 0.87);
  padding: 14px 16px 15px;
  &::placeholder {
    color: rgb(155, 153, 153);
    font-size: 1rem;
    font-weight: bold;
    align-items: center;
    padding-left: 0;
  }
`;

const SearchForm = styled.form`
  width: 220px;
  height: 50px;
`;

const SearchFormInput = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(128, 128, 128, 0.87);
  padding: 14px 16px 15px;
  &::placeholder {
    color: rgb(155, 153, 153);
    font-size: 0.9rem;
    font-weight: bold;
    align-items: center;
    padding-left: 0;
  }
`;

export default SearchInput;
