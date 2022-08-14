import React, { useContext } from "react";
import "../../assets/css/SearchMap/Toggle.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import ToggleContent from "./ToggleContent";
import { ToggleContext } from "../../contexts/ToggleContext";
import SearchList from "./SearchList";

const Toggle = () => {
  const { handleToggle, toggleInfo } = useContext(ToggleContext);

  return (
    <>
      {toggleInfo ? (
        <div className="toggle-container">
          <ToggleContent />
          <div className="toggle-on">
            <div className="toggle-box" onClick={handleToggle}>
              <MdKeyboardArrowLeft className="toggle-icon" />
            </div>
          </div>
        </div>
      ) : (
        <div className="toggle-off">
          <SearchList />
          <div className="toggle-box" onClick={handleToggle}>
            <MdKeyboardArrowRight className="toggle-icon" />
          </div>
        </div>
      )}
    </>
  );
};

export default Toggle;
