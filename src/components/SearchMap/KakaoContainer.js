import React, { useContext } from "react";
import KakaoMap from "./KakaoMap";
import { KakaoContext } from "../../contexts/KakaoContext";
import "../../assets/css/SearchMap/KakaoMap.css";
import SearchInfo from "./SearchInfo";
import SearchShadow from "./SearchShadow";

const KakaoContainer = () => {
  const { Place } = useContext(KakaoContext);

  return (
    <div className="search-container">
      <SearchShadow />
      <SearchInfo />
      <KakaoMap Place={Place} />
    </div>
  );
};

export default KakaoContainer;
