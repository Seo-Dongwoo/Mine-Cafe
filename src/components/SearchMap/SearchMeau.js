import React, { useContext } from "react";
import { ToggleContext } from "../../contexts/ToggleContext";
import { Link } from "react-router-dom";
import "../../assets/css/SearchMap/Toggle/SearchMeau.css";
import { BsList } from "react-icons/bs";

const SearchMeau = () => {
  const { toggleInfo } = useContext(ToggleContext);

  return (
    <>
      {toggleInfo ? (
        <div className="toggle-meau-container">
          <Link to="/" className="toggle-meau-link">
            <BsList className="toggle-meau-icon" />
            <h1 className="toggle-meau-title">Coffee</h1>
          </Link>
        </div>
      ) : (
        <div className="meau-container">
          <Link to="/" className="meau-link">
            <BsList className="meau-icon" />
            <h1 className="meau-title">Coffee</h1>
          </Link>
        </div>
      )}
    </>
  );
};

export default SearchMeau;
