import React, { useState, createContext } from "react";

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [toggleInfo, setToggleInfo] = useState(false);

  const handleToggle = () => setToggleInfo(!toggleInfo);

  const value = {
    handleToggle,
    toggleInfo,
    setToggleInfo,
  };

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
};
