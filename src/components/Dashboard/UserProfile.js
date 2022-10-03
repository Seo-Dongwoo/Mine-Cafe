import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import styled from "styled-components";
import { LeftArrowAlt } from "@styled-icons/boxicons-regular/LeftArrowAlt";

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
    <Profile>
      <Title>
        <h1>UserProfile</h1>
        <DashboardLink to="/my-cafe">
          <LinkIcon />
          Back
        </DashboardLink>
      </Title>
      <ProfilePhoto>
        <Photo src={photoURL} alt="userprofile" />
      </ProfilePhoto>
      <ProfileName>
        <h1>{currentUser.displayName}</h1>
        <GrayName>
          {currentUser.email === null ? "이메일 비공개" : currentUser.email}
        </GrayName>
        <GrayName>
          {currentUser.phoneNumber === null
            ? "전화번호 비공개"
            : currentUser.phoneNumber}
        </GrayName>
      </ProfileName>
    </Profile>
  );
};

const Profile = styled.div`
  height: 80%;
  width: 85%;
  border-radius: 2rem;
  background-color: rgba(255, 255, 255, 0.54);
  overflow: hidden;

  @media (max-width: 1460px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Title = styled.div`
  width: 30%;
  margin-top: 30px;
  text-align: center;
  font-family: "Permanent Marker";
  color: #ffc107;

  @media (max-width: 1460px) {
    margin: 30px auto;
  }
`;

const DashboardLink = styled(Link)`
  justify-content: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  color: #8a631a;
  align-items: center;
  margin-right: 20px;
`;

const LinkIcon = styled(LeftArrowAlt)`
  width: 1.5rem;
  margin-right: 8px;
`;

const ProfilePhoto = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 40%;
  margin: 40px auto;
  text-align: center;

  @media (max-width: 1460px) {
    height: 40%;
    padding-left: 0;
  }
`;

const Photo = styled.img`
  height: 100%;
  border-radius: 140px;
`;

const ProfileName = styled.div`
  text-align: center;
`;

const GrayName = styled.h3`
  margin-top: 10px;
  color: gray;
`;

export default UserProfile;
