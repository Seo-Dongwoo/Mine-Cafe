import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Category from "../Common/Category";
import { useDispatch } from "react-redux";
import { addCafeInitiate } from "../../redux/Actions/DashboardActions";
import styled from "styled-components";

const AddCafeModal = ({ modal, setModal }) => {
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

  const onCloseHandler = () => {
    setModal({});
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
    setState({ ...state, ...modal.content });
  }, [setState]);

  return (
    <Modal onSubmit={handleSubmit}>
      {message?.msg && (
        <Message
          variant={message?.error ? "danger" : "success"}
          onClose={() => setMessage("")}
        >
          {message?.msg}
        </Message>
      )}
      <Place value={modal.content}>
        <PlaceName name="place_name">
          <h2>{modal.content.place_name}</h2>
        </PlaceName>
        <AddressName name="address_name">
          <h3>{modal.content.address_name}</h3>
        </AddressName>
      </Place>
      <Category onChange={handleChange} name="reason" value={reason} />
      <ModalBtnBox>
        <AddBtn>추가</AddBtn>
        <CancelBtn onClick={onCloseHandler}>취소</CancelBtn>
      </ModalBtnBox>
    </Modal>
  );
};

const Modal = styled.form`
  position: fixed;
  width: 20%;
  height: 36%;
  background: white;
  box-sizing: border-box;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 16;

  @media (max-width: 1440px) {
    width: 360px;
  }
`;

const Message = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const Place = styled.div`
  width: 100%;
  height: 37%;
  padding: 40px 0 0 30px;
`;

const PlaceName = styled.div`
  margin-bottom: 5px;
`;

const AddressName = styled.div`
  color: gray;
`;

const ModalBtnBox = styled.div`
  text-align: center;
  justify-content: center;
  height: 60px;
  display: flex;
`;

const AddBtn = styled.button`
  width: 30%;
  margin: 5px 15px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  background-color: #416dea;
  cursor: pointer;
`;

const CancelBtn = styled.button`
  width: 30%;
  margin: 5px 15px;
  border: none;
  color: white;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  background-color: #f32c52;
  cursor: pointer;
`;

export default AddCafeModal;
