import React from "react";
import SignupForm from "../../components/Auth/Signup/SignupForm";
import styled from "styled-components";

const Signup = () => {
  return (
    <SingUpContainer>
      <SignupForm />
    </SingUpContainer>
  );
};

const SingUpContainer = styled.div`
  background-image: url(https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_960_720.jpg);
  display: flex;
  background-size: cover;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export default Signup;
