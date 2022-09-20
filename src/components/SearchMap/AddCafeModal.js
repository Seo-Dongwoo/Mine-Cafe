import React, { useEffect, useState } from "react";
import "../../assets/css/SearchMap/Toggle/AddCafeModal.css";
import Category from "../Common/Category";
import { useDispatch } from "react-redux";
import { addCafeInitiate } from "../../redux/Actions/DashboardActions";

const AddCafeModal = ({ modal, setModal }) => {
  const initialState = {
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
    <form onSubmit={handleSubmit} className="modal">
      {message?.msg && (
        <div
          variant={message?.error ? "danger" : "success"}
          onClose={() => setMessage("")}
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          {message?.msg}
        </div>
      )}
      <div className="place" value={modal.content}>
        <div className="place_name" name="place_name">
          <h2>{modal.content.place_name}</h2>
        </div>
        <div className="address_name" name="address_name">
          <h3>{modal.content.address_name}</h3>
        </div>
      </div>
      <Category onChange={handleChange} name="reason" value={reason} />
      <div className="modal-btn-box">
        <button className="modal-add-btn">추가</button>
        <button className="modal-cancel-btn" onClick={onCloseHandler}>
          취소
        </button>
      </div>
    </form>
  );
};

export default AddCafeModal;
