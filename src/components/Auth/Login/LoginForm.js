import React, { useState } from "react";
import AuthButton from "../../Common/AuthCommon/AuthButton";
import AuthInput from "../../Common/AuthCommon/AuthInput";
import LoginKeep from "./LoginKeep";
import OtherLogin from "./OtherLogin";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import styled from "styled-components";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, googleLogin, githubLogin } = useAuth();
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
    console.log(e.target.value);
  };

  const handleGoogleLogin = async () => {
    try {
      setError("");
      await googleLogin();
      navigate("/");
    } catch (error) {
      setError("Google 로그인 실패");
    }
  };

  const handleGithubLogin = async () => {
    try {
      setError("");
      await githubLogin();
      navigate("/");
    } catch (error) {
      setError("Github 로그인 실패");
    }
  };

  return (
    <div>
      <LoginFormWrap onSubmit={handleSubmit}>
        <LoginTitleLink to="/">
          <LoginTitle>Login</LoginTitle>
        </LoginTitleLink>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <LoginInput>
          <AuthInput
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <AuthInput
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </LoginInput>
        <KeepLogin>
          <LoginKeep />
        </KeepLogin>
        <LoginBtn>
          <AuthButton content="Login" />
        </LoginBtn>
        <OtherLoginTitle>Another Login</OtherLoginTitle>
        <Boundary />
        <OtherLoginContainer>
          <OtherLogin className="github-login">
            <BsGithub onClick={handleGithubLogin} />
          </OtherLogin>
          <OtherLogin className="google-login">
            <FcGoogle onClick={handleGoogleLogin} />
          </OtherLogin>
        </OtherLoginContainer>
      </LoginFormWrap>
      <Service>
        <FindPasswordLink to="/findPassword">
          <h4>Forgot Password?</h4>
        </FindPasswordLink>
        <SignUpLink to="/signup">
          <NotId>
            <h5>Don't have an account?</h5>
            <NotIdMessage>Sign Up</NotIdMessage>
          </NotId>
        </SignUpLink>
      </Service>
    </div>
  );
};

const LoginFormWrap = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  width: 30vw;
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  @media screen and (max-width: 1180px) {
    height: 60vh;
    width: 40vw;
  }
  @media screen and (max-width: 760px) {
    height: 60vh;
    width: 70vw;
  }
`;

const LoginTitleLink = styled(Link)`
  text-decoration: none;
  color: white;
  text-transform: none;
`;

const LoginTitle = styled.h2`
  font-size: 2rem;
  margin: 2rem 0 2rem 0;
  letter-spacing: 0.1rem;
  font-family: "Merriweather", serif;
`;

const ErrorMessage = styled.span`
  margin-bottom: 10px;
  color: red;
  font-size: 0.8rem;
  font-weight: bold;
`;

const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const KeepLogin = styled.div`
  width: 65%;
  margin-top: 5px;
`;

const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1rem 0 2rem 0;
`;
const Boundary = styled.div`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  margin: 1.5rem 0 1rem 0;
  background: linear-gradient(to right, #101461 2%, #3355bb 65%);
  backdrop-filter: blur(25px);
`;

const OtherLoginContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 2rem 0;
  width: 100%;
`;

const OtherLoginTitle = styled.h5`
  cursor: pointer;
`;

const Service = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  text-decoration: none;
  @media screen and (max-width: 760px) {
    font-size: 0.8rem;
  }
`;

const FindPasswordLink = styled(Link)`
  text-decoration: none;
  color: rgb(43, 43, 243);
  @media screen and (max-width: 1180px) {
    padding-right: 30px;
  }
`;

const SignUpLink = styled(Link)`
  margin-right: 20px;
  text-decoration-line: none;
  color: white;
`;

const NotId = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const NotIdMessage = styled.h4`
  color: rgb(43, 43, 243);
  font-weight: bold;
`;

export default LoginForm;
