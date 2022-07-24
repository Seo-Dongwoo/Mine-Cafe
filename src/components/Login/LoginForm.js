import React, { useState } from "react";
import "../../assets/css/Login/LoginForm.css";
import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";
import LoginKeep from "./LoginKeep";
import OtherLogin from "./OtherLogin";
import { FcGoogle } from "react-icons/fc";
import { SiKakao } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Alert } from "react-bootstrap";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      await login(email, password);
      navigate("/");
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          setError("존재하지 않는 이메일입니다.");
          break;
        case "auth/invalid-email":
          setError("잘못된 이메일 주소입니다.");
          break;
        case "auth/wrong-password":
          setError("비밀번호가 일치하지 않습니다.");
        default:
      }
    }
    setLoading(false);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Link to="/" className="form-title-link">
        <h2 className="form-title">Coffee</h2>
      </Link>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className="input-container">
        <LoginInput
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <LoginInput
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="keep-container">
        <LoginKeep />
      </div>
      <div className="login-btn-container">
        <LoginButton content="Login" />
      </div>
      <h5 className="otherlogin-title">또 다른 로그인</h5>
      <hr className="boundary" />
      <div className="otherlogin-container">
        <OtherLogin className="kakao-login">
          <SiKakao />
        </OtherLogin>
        <OtherLogin className="google-login">
          <FcGoogle />
        </OtherLogin>
      </div>
      <div className="service-container">
        <h4 className="forget-password">비밀번호찾기</h4>
        <Link to="/signup" className="signup-link">
          <h4 className="signup">회원가입</h4>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
