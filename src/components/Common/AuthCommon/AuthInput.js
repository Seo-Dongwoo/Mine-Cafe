import React from "react";
import "../../../assets/css/Common/AuthInput.css";

const AuthInput = ({ type, placeholder, required, onChange }) => {
  return (
    <input
      className="auth-input"
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default AuthInput;
