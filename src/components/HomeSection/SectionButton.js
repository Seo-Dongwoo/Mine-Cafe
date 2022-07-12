import React from "react";
import { Button } from "../Button/Button";
import "../../assets/css/SectionButton.css";

const SectionButton = () => {
  return (
    <div className="container">
      <Button className="section-button" buttonStyle="btn--outline">
        GET STARTED
      </Button>
    </div>
  );
};

export default SectionButton;
