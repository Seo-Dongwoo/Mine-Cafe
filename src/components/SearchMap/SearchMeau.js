import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/SearchMap/SearchMeau.css";
import { BsList } from "react-icons/bs";

const SearchMeau = () => {
  return (
    <div className="meau-container">
      <Link to="/search-cafe" className="meau-link">
        <BsList className="meau-icon" />
        <h1 className="meau-title">Coffee</h1>
      </Link>
    </div>
  );
};

export default SearchMeau;
