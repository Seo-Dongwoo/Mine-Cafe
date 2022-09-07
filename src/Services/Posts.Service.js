import { db } from "../firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
const postCollectionRef = collection(db, "posts");

class PostDataService {
  addPosts = (newPost) => {
    return addDoc(postCollectionRef, newPost);
  };

  updatePost = (id, updatePost) => {
    const postDoc = doc(db, "posts", id);
    return updateDoc(postDoc, updatePost);
  };

  deletePost = (id) => {
    const postDoc = doc(db, "posts", id);
    return deleteDoc(postDoc);
  };

  getAllPosts = () => {
    return getDocs(postCollectionRef);
  };

  getPost = (id) => {
    const postDoc = doc(db, "posts", id);
    return getDoc(postDoc);
  };
}

export default new PostDataService();
