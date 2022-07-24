import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  // 회원가입
  const register = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  // 로그인
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
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
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
