// CONTEXT API
// FOr Video PopUP


import React, { useState, createContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);


  return (
    <GameContext.Provider value={{show:[show,setShow],videoId:[videoId,setVideoId]}}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };