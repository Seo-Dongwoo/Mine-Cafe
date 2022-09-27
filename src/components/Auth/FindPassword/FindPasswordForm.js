import React, { useState } from "react";
import "../../../assets/css/FindPassword/FindPasswordForm.css";
import AuthInput from "../../Common/AuthCommon/AuthInput";
import AuthButton from "../../Common/AuthCommon/AuthButton";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

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
    <form className="findpassword-form" onSubmit={handleSubmit}>
      <Link to="/" className="form-title-link">
        <h2 className="form-title">비밀번호 찾기</h2>
      </Link>
      {error && (
        <span style={{ color: "red", fontSize: "0.8rem", fontWeight: "bold" }}>
          {error}
        </span>
      )}
      <div className="findpassword-input-container">
        <AuthInput
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </div>
      <div className="findpassword-btn-container">
        <AuthButton type="submit" content="Submit" />
      </div>
      <hr className="boundary" />
      <Link to="/login" className="have-id-link">
        <p className="have-id">Login</p>
      </Link>
    </form>
  );
};

export default FindPasswordForm;
