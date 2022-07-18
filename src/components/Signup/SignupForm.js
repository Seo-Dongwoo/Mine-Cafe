import React from "react";
import "../../assets/css/Signup/SignupForm.css";
import SignupInput from "./SignupInput";
import SignupButton from "./SignupButton";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <div className="signup-form">
      <Link to="/" className="form-title-link">
        <h2 className="form-title">Coffee</h2>
      </Link>

      <div className="signup-input-container">
        <SignupInput type="text" placeholder="Email" />
        <SignupInput type="password" placeholder="Password" />
        <SignupInput type="password" placeholder="Confirm Password" />
      </div>
      <div className="signup-btn-container">
        <SignupButton content="signup" />
      </div>
      <hr className="boundary" />
      <Link to="/login" className="have-id-link">
        <p className="have-id">계정이 있으신가요?</p>
      </Link>
    </div>
  );
};

export default SignupForm;
