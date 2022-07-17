import React from "react";
import "../../assets/css/Login/LoginForm.css";
import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";
import LoginKeep from "./LoginKeep";
import OtherLogin from "./OtherLogin";
import { FcGoogle } from "react-icons/fc";
import { SiKakao } from "react-icons/si";

const LoginForm = () => {
  return (
    <div className="login-form">
      <h2 className="form-title">WELCOME</h2>
      <div className="input-container">
        <LoginInput type="text" placeholder="Email" />
        <LoginInput type="password" placeholder="Password" />
      </div>
      <div className="keep-container">
        <LoginKeep />
      </div>
      <div className="btn-container">
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
        <h4 className="signup">회원가입</h4>
      </div>
    </div>
  );
};

export default LoginForm;
