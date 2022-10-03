import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Category from "../Common/Category";
import { useDispatch } from "react-redux";
import { addCafeInitiate } from "../../redux/Actions/DashboardActions";
import styled from "styled-components";

const AddCafe = ({ onClick }) => {
  const { currentUser } = useAuth();
  const initialState = {
    user_id: currentUser.uid,
    place_name: "",
    address_name: "",
    reason: "",
  };
  const [state, setState] = useState(initialState);
  const { place_name, address_name, reason } = state;
  const [message, setMessage] = useState({ error: false, msg: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (place_name === "" || address_name === "" || reason === "") {
      setMessage({ error: true, msg: "추가가 실패하였습니다." });
      return;
    } else {
      setMessage({ error: false, msg: "카페가 추가되었습니다." });
    }
    dispatch(addCafeInitiate(state));
    setState({ place_name: "", address_name: "", reason: "" });
  };

  useEffect(() => {
    setState({ ...state });
  }, [setState]);

  return (
    <Form onSubmit={handleSubmit}>
      {message?.msg && (
        <Message
          variant={message?.error ? "danger" : "success"}
          onClose={() => setMessage("")}
        >
          {message?.msg}
        </Message>
      )}
      <InputBox>
        <Input
          type="text"
          onChange={handleChange}
          required
          name="place_name"
          value={place_name || ""}
        />
        <Label>Name</Label>
      </InputBox>
      <InputBox>
        <Input
          type="text"
          required
          onChange={handleChange}
          name="address_name"
          value={address_name || ""}
        />
        <Label>Address</Label>
      </InputBox>
      <Category onChange={handleChange} name="reason" value={reason} />
      <BtnBox>
        <AddBtn>추가</AddBtn>
        <CancelBtn onClick={onClick}>취소</CancelBtn>
      </BtnBox>
    </Form>
  );
};

const Form = styled.form`
  width: 90%;
  height: 330px;
  background: rgba(241, 223, 183, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  z-index: 1;
  @media (max-width: 1460px) {
    width: 40%;
    height: 360px;
    margin-top: 120px;
    padding-bottom: 20px;
    z-index: 1;
    background: rgb(241, 213, 159);
  }
`;

const Message = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const InputBox = styled.div`
  position: relative;
  text-align: center;
  top: 30px;
  @media (max-width: 1460px) {
    width: 80%;
  }
`;

const Input = styled.input`
  width: 90%;
  padding: 10px 0;
  font-size: 16px;
  color: black;
  margin-bottom: 30px;
  border: none;
  border-bottom: 2px solid orange;
  outline: none;
  background: transparent;
  &:focus ~ label,
  &:valid ~ label {
    top: -20px;
    left: 0;
    color: orange;
    font-size: 12px;
  }
  @media (max-width: 1460px) {
    width: 80%;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0 0 20px;
  font-size: 16px;
  font-weight: bold;
  color: #ffc107;
  pointer-events: none;
  transition: 0.5s;
  @media (max-width: 1460px) {
    padding: 10px 0 0 35px;
  }
  @media (max-width: 590px) {
    padding: 10px 0 0 20px;
    font-size: 12px;
  }
`;

const BtnBox = styled.div`
  text-align: center;
  height: 50px;
  display: flex;
  margin-top: 30px;

  @media (max-width: 1460px) {
    justify-content: center;
    margin: 0 auto;
  }
`;

const AddBtn = styled.button`
  width: 40%;
  margin: 5px 30px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  background-color: orange;
  cursor: pointer;
  @media (max-width: 1460px) {
    width: 25%;
    height: 50px;
    margin: 5px 30px;
  }
  @media (max-width: 590px) {
    width: 40%;
    margin: 5px 20px;
  }
`;

const CancelBtn = styled.button`
  width: 40%;
  margin: 5px 30px;
  border: none;
  color: white;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  background-color: orange;
  cursor: pointer;
  @media (max-width: 1460px) {
    width: 25%;
    height: 50px;
    margin: 5px 30px;
  }
  @media (max-width: 590px) {
    width: 40%;
    margin: 5px 20px;
  }
`;

export default AddCafe;
