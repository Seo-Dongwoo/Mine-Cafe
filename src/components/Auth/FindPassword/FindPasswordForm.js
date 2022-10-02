import React, { useState } from "react";
import AuthInput from "../../Common/AuthCommon/AuthInput";
import AuthButton from "../../Common/AuthCommon/AuthButton";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import styled from "styled-components";

const FindPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { findPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      await findPassword(email);
      Navigate("/login");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          setError("잘못된 이메일 주소입니다.");
          break;
        case "auth/user-not-found":
          setError("가입된 이메일 주소가 아닙니다.");
        default:
      }
    }
  };

  return (
    <FindForm onSubmit={handleSubmit}>
      <FormTitleLink to="/">
        <FormTitle>비밀번호 찾기</FormTitle>
      </FormTitleLink>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <FormInput>
        <AuthInput
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </FormInput>
      <FormBtn>
        <AuthButton type="submit" content="Submit" />
      </FormBtn>
      <Boundary />
      <HaveIdLink to="/login">
        <GotoLogin>Login</GotoLogin>
      </HaveIdLink>
    </FindForm>
  );
};

const FindForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 40vh;
  width: 30vw;
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  @media screen and (max-width: 1180px) {
    height: 40vh;
    width: 50vw;
  }
  @media screen and (max-width: 760px) {
    height: 40vh;
    width: 70vw;
  }
`;

const FormTitleLink = styled(Link)`
  text-decoration: none;
  color: white;
  text-transform: none;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin: 2rem 0 2rem 0;
  letter-spacing: 0.1rem;
  font-family: "Merriweather", serif;
`;

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const FormBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
  font-weight: bold;
`;

const GotoLogin = styled.h4`
  margin-top: 17px;
`;

const HaveIdLink = styled(Link)`
  text-decoration: none;
  color: white;
  text-transform: none;
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

export default FindPasswordForm;
