import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  console.log(currentUser);

  // 회원가입
  const register = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  // 로그인
  const login = (email, password) => {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then(async (result) => {
        let user = result.user.uid;
        console.log(user);
        await addDoc(collection(db, "users"), { user });
      });
  };

  // 로그아웃
  const logout = () => {
    return auth.signOut();
  };

  // 구글 로그인
  const googleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: "select_account" });
    return auth.signInWithPopup(googleProvider).then(async (result) => {
      let user = result.user.uid;
      console.log(user);
      await addDoc(collection(db, "users"), { user });
    });
  };

  // 깃허브 로그인
  const githubLogin = () => {
    const githubProvider = new GithubAuthProvider();
    githubProvider.setCustomParameters({ prompt: "select_account" });
    return auth.signInWithPopup(githubProvider).then(async (result) => {
      let user = result.user.uid;
      console.log(user);
      await addDoc(collection(db, "users"), { user });
    });
  };

  // 비밀번호 찾기
  const findPassword = (email) => {
    return auth.sendPasswordResetEmail(email, {
      url: "http://localhost:3000/login",
    });
  };

  // 계속 user의 상태 변화를 지켜보고 있는다.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    register,
    login,
    logout,
    googleLogin,
    findPassword,
    githubLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
