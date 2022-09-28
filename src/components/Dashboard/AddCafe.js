import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import "../../assets/css/Dashboard/AddCafe.css";
import Category from "../Common/Category";
import { useDispatch } from "react-redux";
import { addCafeInitiate } from "../../redux/Actions/DashboardActions";

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

  return (
    <form className="addCafe-form" onSubmit={handleSubmit}>
      {message?.msg && (
        <div
          variant={message?.error ? "danger" : "success"}
          onClose={() => setMessage("")}
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          {message?.msg}
        </div>
      )}
      <div className="input-box">
        <input
          type="text"
          onChange={handleChange}
          required
          name="place_name"
          value={place_name || ""}
        />
        <label>Name</label>
      </div>
      <div className="input-box">
        <input
          type="text"
          required
          onChange={handleChange}
          name="address_name"
          value={address_name || ""}
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
