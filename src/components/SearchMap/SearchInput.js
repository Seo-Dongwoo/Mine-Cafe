import React, { useContext } from "react";
import { KakaoContext } from "../../contexts/KakaoContext";
import "../../assets/css/SearchMap/SearchInput.css";

const SearchInput = () => {
  const { handleSubmit, onChange, inputText } = useContext(KakaoContext);

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        placeholder="장소를 입력해주세요."
        onChange={onChange}
        value={inputText}
      />
    </form>
  );
};

export default SearchInput;
