import React, { useContext } from "react";
import "../../assets/css/SearchMap/SearchList.css";
import { KakaoContext } from "../../contexts/KakaoContext";

const SearchList = () => {
  const { Places } = useContext(KakaoContext);

  return (
    <div id="result-list">
      {Places.map((item, i) => (
        <div key={i} className="result-items">
          <div className="result-title">
            <h4 className="title-number">{i + 1}</h4>
            <h4>{item.place_name}</h4>
          </div>
          <div>
            {item.road_address_name ? (
              <div>
                <span>{item.road_address_name}</span>
              </div>
            ) : (
              <span>{item.address_name}</span>
            )}
          </div>
          <div className="result-phone">
            <span>{item.phone}</span>
          </div>
        </div>
      ))}
      <div id="pagination"></div>
    </div>
  );
};

export default SearchList;
