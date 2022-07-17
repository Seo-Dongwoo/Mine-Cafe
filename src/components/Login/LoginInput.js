import React from "react";
import "../../assets/css/Login/LoginInput.css";

const LoginInput = ({ type, placeholder }) => {
  return (
    <input className="login-input" type={type} placeholder={placeholder} />
  );
};

export default LoginInput;
