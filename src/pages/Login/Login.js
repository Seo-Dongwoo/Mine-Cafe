import React from "react";
import "../../assets/css/Login/LoginForm.css";
import LoginForm from "../../components/Login/LoginForm";
import { AuthProvider } from "../../contexts/AuthContext";

const Login = () => {
  return (
    <AuthProvider>
      <div className="login-container">
        <LoginForm />
      </div>
    </AuthProvider>
  );
};

export default Login;
