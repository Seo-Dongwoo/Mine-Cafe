import React, { useState } from "react";
import "../../../assets/css/Signup/SignupForm.css";
import AuthInput from "../../Common/AuthCommon/AuthInput";
import AuthButton from "../../Common/AuthCommon/AuthButton";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isPasswordConfirmd = (password, confirmPassword) => {
    if (password && confirmPassword && password === confirmPassword)
      return true;
    else {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isPasswordConfirmd(password, confirmPassword)) {
      return setError("비밀번호가 일치하지 않습니다.");
    }

    try {
      setError("");
      await register(email, password);
      navigate("/login");
    } catch (err) {
      switch (err.code) {
        case "auth/weak-password":
          setError("비밀번호는 6자리 이상이어야 합니다.");
          break;
        case "auth/invalid-email":
          setError("잘못된 이메일 주소입니다.");
          break;
        case "auth/email-already-in-use":
          setError("이미 가입되어 있는 계정입니다.");
          break;
        default:
      }
    }
    setLoading(false);
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <Link to="/" className="form-title-link">
        <h2 className="form-title">Coffee</h2>
      </Link>
      {error && (
        <span style={{ color: "red", fontSize: "0.8rem", fontWeight: "bold" }}>
          {error}
        </span>
      )}
      <div className="signup-input-container">
        <AuthInput
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <AuthInput
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <AuthInput
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />
      </div>
      <div className="signup-btn-container">
        <AuthButton disabled={loading} type="submit" content="signup" />
      </div>
      <hr className="boundary" />
      <Link to="/login" className="have-id-link">
        <p className="have-id">계정이 있으신가요?</p>
      </Link>
    </form>
  );
};

export default SignupForm;
