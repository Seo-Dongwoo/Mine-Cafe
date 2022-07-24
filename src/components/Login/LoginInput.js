import React from "react";
import "../../assets/css/Login/LoginInput.css";

const LoginInput = ({ type, placeholder, onChange, required }) => {
  return (
    <input
      className="login-input"
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default LoginInput;
