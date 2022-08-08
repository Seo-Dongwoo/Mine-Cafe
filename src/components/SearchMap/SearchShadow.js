import React, { useState } from "react";
import "../../assets/css/SearchMap/SearchShadow.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import ToggleMeau from "./ToggleMeau";

const SearchShadow = () => {
  const [toggleInfo, setToggleInfo] = useState(false);

  const handleToggle = () => setToggleInfo(!toggleInfo);

  return (
    <>
      {toggleInfo ? (
        <div className="toggle-container">
          <ToggleMeau />
          <div className="toggle-on">
            <div className="toggle-box" onClick={handleToggle}>
              <MdKeyboardArrowLeft className="toggle-icon" />
            </div>
          </div>
        </div>
      ) : (
        <div className="toggle-off">
          <div className="toggle-box" onClick={handleToggle}>
            <MdKeyboardArrowRight className="toggle-icon" />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchShadow;
