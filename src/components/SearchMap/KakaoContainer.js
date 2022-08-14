import React from "react";
import KakaoMap from "./KakaoMap";
import "../../assets/css/SearchMap/KakaoMap.css";
import Banner from "./Banner";
import Toggle from "./Toggle";

const KakaoContainer = () => {
  return (
    <div className="search-container">
      <Banner />
      <Toggle />
      <KakaoMap />
    </div>
  );
};

export default KakaoContainer;
