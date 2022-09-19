import { db } from "../../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

const cafeCollectionRef = collection(db, "posts");

export const ADD_CAFE = "ADD_CAFE";
export const EDIT_CAFE = "EDIT_CAFE";
export const DELETE_CAFE = "DELETE_CAFE";
export const GET_CAFE = "GET_CAFE";
export const GET_CAFES = "GET_CAFES";

const getCafes = (cafes) => ({
  type: GET_CAFES,
  payload: cafes,
});

const addCafe = () => ({
  type: ADD_CAFE,
});

const deleteCafe = () => ({
  type: DELETE_CAFE,
});

// 컬렉션의 여러 문서 수신 대기
const q = query(cafeCollectionRef);

export const getCafesInitiate = () => {
  return function (dispatch) {
    onSnapshot(q, (snapshot) => {
      const cafes = [];
      snapshot.forEach((doc) => {
        cafes.push({ ...doc.data(), id: doc.id });
      });
      dispatch(getCafes(cafes));
    });
  };
};

// DB에 데이터 추가
export const addCafeInitiate = (cafe) => {
  return async function (dispatch) {
    await addDoc(cafeCollectionRef, cafe);
    dispatch(addCafe());
  };
};

// DB에 데이터 삭제
export const deleteCafeInitiate = (id) => {
  return async function (dispatch) {
    await deleteDoc(doc(cafeCollectionRef, id));
    dispatch(deleteCafe());
  };
};
