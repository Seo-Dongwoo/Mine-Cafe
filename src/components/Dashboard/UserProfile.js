import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Dashboard/UserProfile.css";
import { useAuth } from "../../contexts/AuthContext";
import { AiOutlineArrowLeft } from "react-icons/ai";

const UserProfile = () => {
  const { currentUser } = useAuth();
  const [photoURL, setPhotoURL] = useState(
    "https://www.kibrispdr.org/data/1084/gambar-login-user-4.png"
  );

  useEffect(() => {
    if (currentUser) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);
  return (
    <div className="profile-container">
      <div className="profile-title">
        <h1>UserProfile</h1>
        <Link className="go-mycafe" to="/my-cafe">
          <AiOutlineArrowLeft className="go-icon" />
          Back
        </Link>
      </div>
      <div className="profile-photo-box">
        <img src={photoURL} alt="userprofile" className="profile-photo" />
      </div>
      <div className="profile-name">
        <h1>{currentUser.displayName}</h1>
        <h3>
          {currentUser.email === null ? "이메일 비공개" : currentUser.email}
        </h3>
        <h3>
          {currentUser.phoneNumber === null
            ? "전화번호 비공개"
            : currentUser.phoneNumber}
        </h3>
      </div>
    </div>
  );
};

export default UserProfile;
