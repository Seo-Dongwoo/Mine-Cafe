import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "../../assets/css/SectionButton.css";

const SectionButton = () => {
  return (
    <div className="container">
      <Link to="/login">
        <Button className="section-button" buttonStyle="btn--outline">
          GET STARTED
        </Button>
      </Link>
    </div>
  );
};

export default SectionButton;
