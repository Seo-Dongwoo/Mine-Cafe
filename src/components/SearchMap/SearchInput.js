import React, { useContext } from "react";
import { KakaoContext } from "../../contexts/KakaoContext";
import { ToggleContext } from "../../contexts/ToggleContext";
import "../../assets/css/SearchMap/SearchInput.css";

const SearchInput = () => {
  const { handleSubmit, onChange, inputText } = useContext(KakaoContext);
  const { toggleInfo } = useContext(ToggleContext);

  return (
    <>
      {toggleInfo ? (
        <form className="toggle-search-form" onSubmit={handleSubmit}>
          <input
            className="toggle-search-input"
            placeholder="내 장소 및 카페 검색"
            onChange={onChange}
            value={inputText}
          />
        </form>
      ) : (
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            className="banner-input"
            placeholder="내 장소 및 카페 검색"
            onChange={onChange}
            value={inputText}
          />
        </form>
      )}
    </>
  );
};

export default SearchInput;
