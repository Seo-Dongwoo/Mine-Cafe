import React, { useContext, useEffect, useState } from "react";
import "../../assets/css/SearchMap/Toggle/SearchList.css";
import { KakaoContext } from "../../contexts/KakaoContext";
import AddCafeModal from "./AddCafeModal";

const SearchList = () => {
  const [modal, setModal] = useState({
    content: {},
    open: false,
  });
  const { Places } = useContext(KakaoContext);

  const onModalHandler = (content) => {
    setModal({
      content: content,
      open: !modal.open,
    });
    console.log(content);
  };

  return (
    <div id="result-list">
      {Places.map((item, i) => (
        <div key={item.id} className="result-items">
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
          <button className="modal-btn" onClick={() => onModalHandler(item)}>
            <span> 카페 추가</span>
          </button>
          {modal.open === true ? (
            <AddCafeModal modal={modal} setModal={setModal} />
          ) : null}
        </div>
      ))}
      <div id="pagination"></div>
    </div>
  );
};

export default SearchList;
