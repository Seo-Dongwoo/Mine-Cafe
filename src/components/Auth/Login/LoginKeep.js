import React, { useState } from "react";
import styled from "styled-components";

const LoginKeep = () => {
  const [check, setCheck] = useState(false);
  const onChange = ({ target }) => {
    target.checked ? setCheck(true) : setCheck(false);
  };
  return (
    <LoginKeepContainer>
      <KeepCheckBox type="checkbox" onClick={onChange} />
      <h5>로그인 상태 유지</h5>
    </LoginKeepContainer>
  );
};

const LoginKeepContainer = styled.div`
  font-weight: bold;
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;
const KeepCheckBox = styled.input`
  margin-right: 5px;
`;

export default LoginKeep;
