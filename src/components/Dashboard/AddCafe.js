import React, { useState } from "react";
import "../../assets/css/Dashboard/AddCafe.css";
import Category from "./Category";
import { useDispatch } from "react-redux";
import { addCafeInitiate } from "../../redux/DashboardActions";

const AddCafe = ({ onClick }) => {
  const initialState = {
    name: "",
    address: "",
    reason: "",
  };
  const [state, setState] = useState(initialState);
  const { name, address, reason } = state;
  const [message, setMessage] = useState({ error: false, msg: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (name === "" || address === "" || reason === "") {
      setMessage({ error: true, msg: "추가가 실패하였습니다." });
      return;
    }

    dispatch(addCafeInitiate(state));
    setState({ name: "", address: "", reason: "" });
  };

  return (
    <form className="addCafe-form" onSubmit={handleSubmit}>
      {message?.msg && (
        <div
          variant={message?.error ? "danger" : "success"}
          onClose={() => setMessage("")}
          style={{ textAlign: "center" }}
        >
          {message?.msg}
        </div>
      )}
      <div className="input-box">
        <input
          type="text"
          onChange={handleChange}
          required
          name="name"
          value={name || ""}
        />
        <label>Name</label>
      </div>
      <div className="input-box">
        <input
          type="text"
          required
          onChange={handleChange}
          name="address"
          value={address || ""}
        />
        <label>Address</label>
      </div>
      <Category onChange={handleChange} name="reason" value={reason} />
      <div className="btn-box">
        <button className="add-btn">추가</button>
        <button className="cancel-btn" onClick={onClick}>
          취소
        </button>
      </div>
    </form>
  );
};

export default AddCafe;
