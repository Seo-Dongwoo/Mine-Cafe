import {
  collection,
  onSnapshot,
  setDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";
import styled from "styled-components";
import { Heart } from "@styled-icons/entypo/Heart";
import { HeartOutlined } from "@styled-icons/entypo/HeartOutlined";

const LikeCafe = ({ cafe }) => {
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const { currentUser } = useAuth();

  const likeDocRef = collection(db, "posts", cafe.id, "likes");

  useEffect(() => {
    setHasLiked(likes.findIndex((like) => like.id === currentUser?.uid) !== -1);
  }, [likes]);

  useEffect(() => {
    onSnapshot(likeDocRef, (snapshot) => {
      setLikes(snapshot.docs);
    });
  }, [db, cafe.id]);

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", cafe.id, "likes", currentUser.uid));
    } else {
      await setDoc(doc(db, "posts", cafe.id, "likes", currentUser.uid), {
        username: currentUser.displayName,
      });
    }
  };

  return (
    <LikeButton onClick={likePost}>
      {hasLiked ? <FillHeart /> : <OutlineHeart />}
      <div>{likes.length > 0 && <p> {likes.length} likes</p>}</div>
    </LikeButton>
  );
};

const LikeButton = styled.div`
  width: 70px;
  font-weight: bold;
`;

const FillHeart = styled(Heart)`
  width: 50px;
  color: red;
`;

const OutlineHeart = styled(HeartOutlined)`
  width: 50px;
`;

export default LikeCafe;
