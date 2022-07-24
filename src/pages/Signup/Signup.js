import React from "react";
import SignupForm from "../../components/Signup/SignupForm";
import "../../assets/css/Signup/SignupForm.css";
import { AuthProvider } from "../../contexts/AuthContext";

const Signup = () => {
  return (
    <AuthProvider>
      <div className="signup-container">
        <SignupForm />
      </div>
    </AuthProvider>
  );
};

export default Signup;
