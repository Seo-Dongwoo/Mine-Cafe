import React from "react";
import "../../assets/css/Signup/SignupInput.css";

const SignupInput = ({ type, placeholder }) => {
  return (
    <input className="signup-input" type={type} placeholder={placeholder} />
  );
};

export default SignupInput;
