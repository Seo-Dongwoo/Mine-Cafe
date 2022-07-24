import React from "react";
import "../../assets/css/Signup/SignupInput.css";

const SignupInput = ({ type, placeholder, required, onChange }) => {
  return (
    <input
      className="signup-input"
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default SignupInput;
