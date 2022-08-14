import React, { useContext } from "react";
import "../../assets/css/SearchMap/Banner.css";
import { KakaoContext } from "../../contexts/KakaoContext";
import SearchInput from "./SearchInput";
import SearchMeau from "./SearchMeau";

const SearchInfo = () => {
  const { handleSubmit, onChange, inputText } = useContext(KakaoContext);

  return (
    <div className="banner">
      <SearchMeau />
      <SearchInput
        handleSubmit={handleSubmit}
        onChange={onChange}
        inputText={inputText}
      />
    </div>
  );
};

export default SearchInfo;
