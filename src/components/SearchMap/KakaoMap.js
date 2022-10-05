import React, { useEffect, useContext } from "react";
import "../../assets/css/SearchMap/KakaoMap.css";
import { KakaoContext } from "../../contexts/KakaoContext";
import styled from "styled-components";

const KakaoMap = () => {
  const { getMap, Place } = useContext(KakaoContext);

  useEffect(() => {
    getMap();
  }, [Place]);

  return (
    <MapWrap>
      <div id="map" />
      <div className="map-category">
        <div id="CE7" data-order="4">
          <span className="category_bg cafe"></span>
          주변 카페
        </div>
      </div>
    </MapWrap>
  );
};

const MapWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default KakaoMap;
