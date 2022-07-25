import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider } from "firebase/auth";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  // 회원가입
  const register = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  // 로그인
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  // 로그아웃
  const logout = () => {
    return auth.signOut();
  };

  // 구글 로그인
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    return auth.signInWithPopup(provider);
  };

  // 계속 user의 상태 변화를 지켜보고 있는다.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    register,
    login,
    logout,
    googleLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
