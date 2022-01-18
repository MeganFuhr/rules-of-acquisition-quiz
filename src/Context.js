import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [questionCount, setQuestionCount] = useState(1);
  const [latinumDisplay, setLatinumDisplay] = useState([]);
  const [latinumResults, setLatinumResults] = useState([]);

  return (
    <AppContext.Provider
      value={{
        score,
        setScore,
        gameOver,
        setGameOver,
        questionCount,
        setQuestionCount,
        latinumDisplay,
        setLatinumDisplay,
        latinumResults,
        setLatinumResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
