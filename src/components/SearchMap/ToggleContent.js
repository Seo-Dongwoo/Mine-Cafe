import React from "react";
import "../../assets/css/SearchMap/ToggleContent.css";
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";
import SearchMeau from "./SearchMeau";
import SearchNav from "./SearchNav";

const ToggleContent = () => {
  return (
    <div className="toggle-content">
      <div className="content-header">
        <SearchMeau />
        <SearchInput />
        <SearchNav />
      </div>
      <div className="content-body">
        <SearchList />
      </div>
      <div className="content-footer">
        <a className="xa" href="#">
          고객센터
        </a>
        <a className="xa" href="#">
          지도 정보 수정
        </a>
        <a className="xa" href="#">
          신규 장소 등록
        </a>
      </div>
    </div>
  );
};

export default ToggleContent;
