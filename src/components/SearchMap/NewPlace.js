import React from "react";
import { IoIosAirplane } from "react-icons/io";
import "../../assets/css/SearchMap/Toggle/NewPlace.css";

const NewPlace = () => {
  return (
    <div className="newPlace-container">
      <h3 className="newPlace-title">
        새로운 장소 <IoIosAirplane className="airplane-icon" />
      </h3>

      <p className="newPlace-description">
        새로운 수정된 정보를 알고 계세요? <br />
        장소 제보는 지도 품질 향상에 큰 도움이 됩니다.
      </p>
      <button className="newPlace-btn1">신규 장소 등록</button>
      <button className="newPlace-btn2">지도 정보 수정</button>
    </div>
  );
};

export default NewPlace;
