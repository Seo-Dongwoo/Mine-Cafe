import React from "react";
import "../../assets/css/SearchMap/Toggle/SearchNav.css";

const SearchNav = () => {
  return (
    <div className="search-nav">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#" className="item-link">
            검색
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="item-link">
            길찾기
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="item-link">
            버스
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="item-link">
            지하철
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SearchNav;
