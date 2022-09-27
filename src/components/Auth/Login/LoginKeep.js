import React, { useState } from "react";
import "../../../assets/css/Login/LoginKeep.css";

const LoginKeep = () => {
  const [check, setCheck] = useState(false);
  const onChange = ({ target }) => {
    target.checked ? setCheck(true) : setCheck(false);
  };
  return (
    <div className="login-keep">
      <input type="checkbox" className="keep-checkbox" onClick={onChange} />
      <h5>로그인 상태 유지</h5>
    </div>
  );
};

export default LoginKeep;
