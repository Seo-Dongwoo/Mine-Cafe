import React, { useState, createContext } from "react";

export const KakaoContext = createContext();

export const KakaoProvider = ({ children }) => {
  const [inputText, setInputText] = useState("");
  const [Place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    // submit을 하면 Input창은 초기화 시킨다.
    setInputText("");
  };

  const value = {
    onChange,
    handleSubmit,
    inputText,
    setInputText,
    Place,
    setPlace,
  };

  return (
    <KakaoContext.Provider value={value}>{children}</KakaoContext.Provider>
  );
};
