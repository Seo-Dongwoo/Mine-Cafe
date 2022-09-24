import {
  collection,
  onSnapshot,
  setDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import "../../assets/css/Dashboard/LikeCafe.css";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";

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
    <div className="like-box" onClick={likePost}>
      {hasLiked ? (
        <BsSuitHeartFill className="fill-btn" />
      ) : (
        <BsSuitHeart className="outline-btn" />
      )}
      <div className="like-people">
        {likes.length > 0 && <p> {likes.length} likes</p>}
      </div>
    </div>
  );
};

export default LikeCafe;
