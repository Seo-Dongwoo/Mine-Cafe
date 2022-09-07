import React, { useState } from "react";
import "../../assets/css/Dashboard/AddCafe.css";
import Category from "./Category";
import PostDataService from "../../Services/Posts.Service";

const AddCafe = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [reason, setReason] = useState("");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (name === "" || address === "" || reason === "") {
      setMessage({ error: true, msg: "추가하기가 실패하였습니다." });
      return;
    }

    const newPost = {
      name,
      address,
      reason,
    };
    console.log(newPost);
    try {
      await PostDataService.addPosts(newPost);
      setMessage({ error: false, msg: "카페가 추가 되었습니다." });
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    setName("");
    setAddress("");
    setReason("");
  };

  return (
    <form className="addCafe-form" onSubmit={handleSubmit}>
      {message?.msg && (
        <div
          variant={message?.error ? "danger" : "success"}
          dismissible
          onClose={() => setMessage("")}
          style={{ textAlign: "center" }}
        >
          {message?.msg}
        </div>
      )}
      <div className="input-box">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          required
          value={name}
        />
        <label>Name</label>
      </div>
      <div className="input-box">
        <input
          type="text"
          required
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
        <label>Address</label>
      </div>
      <Category onChange={(e) => setReason(e.target.value)} />
      <div className="btn-box">
        <button className="add-btn">추가</button>
        <button className="cancel-btn">취소</button>
      </div>
    </form>
  );
};

export default AddCafe;
