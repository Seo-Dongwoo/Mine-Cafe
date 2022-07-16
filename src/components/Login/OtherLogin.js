import React from "react";
import "../../assets/css/Login/OtherLogin.css";

const OtherLogin = ({ color, children }) => {
  return (
    <div className="other-login" background={color}>
      {children}
    </div>
  );
};

export default OtherLogin;
