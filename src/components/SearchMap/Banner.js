import React, { useContext } from "react";
import { KakaoContext } from "../../contexts/KakaoContext";
import SearchInput from "./SearchInput";
import SearchMenu from "./SearchMenu";
import styled from "styled-components";

const SearchInfo = () => {
  const { handleSubmit, onChange, inputText } = useContext(KakaoContext);

  return (
    <Banner>
      <SearchMenu />
      <SearchInput
        handleSubmit={handleSubmit}
        onChange={onChange}
        inputText={inputText}
      />
    </Banner>
  );
};

const Banner = styled.div`
  position: absolute;
  display: flex;
  z-index: 10;
  top: 15px;
  left: 15px;
`;

export default SearchInfo;
