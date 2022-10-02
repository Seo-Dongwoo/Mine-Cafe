import React from "react";
import styled from "styled-components";

const OtherLogin = ({ children }) => {
  return <OtherLoginBox>{children}</OtherLoginBox>;
};
const OtherLoginBox = styled.div`
  height: 3em;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  color: black;
  cursor: pointer;
  svg {
    width: 3rem;
    height: 3rem;
  }
`;

export default OtherLogin;
