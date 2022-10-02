import React, { useState } from "react";
import AuthInput from "../../Common/AuthCommon/AuthInput";
import AuthButton from "../../Common/AuthCommon/AuthButton";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import styled from "styled-components";

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
    console.log(e.target.value);
  };

  return (
    <SignUpFormWrap onSubmit={handleSubmit}>
      <SignUpTitleLink to="/">
        <SignUpTitle>SignUp</SignUpTitle>
      </SignUpTitleLink>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <SignUpInput>
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
      </SignUpInput>
      <SignUpBtn>
        <AuthButton disabled={loading} type="submit" content="signup" />
      </SignUpBtn>
      <Boundary />
      <HaveIdLink to="/login">
        <HaveId>계정이 있으신가요?</HaveId>
      </HaveIdLink>
    </SignUpFormWrap>
  );
};

const SignUpFormWrap = styled.form`
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

const SignUpTitleLink = styled(Link)`
  text-decoration: none;
  color: white;
  text-transform: none;
`;

const SignUpTitle = styled.h2`
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

const Boundary = styled.div`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  margin: 1.5rem 0 1rem 0;
  background: linear-gradient(to right, #101461 2%, #3355bb 65%);
  backdrop-filter: blur(25px);
`;

const SignUpInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40%;
  width: 100%;
`;

const SignUpBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const HaveIdLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const HaveId = styled.p`
  margin-top: 2.5rem;
`;

export default SignupForm;
