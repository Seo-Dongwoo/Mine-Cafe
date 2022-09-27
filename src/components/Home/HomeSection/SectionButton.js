import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Common/Button/Button";
import "../../../assets/css/Home/SectionButton.css";

const SectionButton = () => {
  return (
    <div className="Section-container">
      <Link to="/search-cafe">
        <Button className="section-button" buttonStyle="btn--outline">
          GET STARTED
        </Button>
      </Link>
    </div>
  );
};

export default SectionButton;
