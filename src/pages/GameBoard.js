import React, {useState} from 'react';
import './GameBoard.css';

import GameBoardHeader from './GameBoardHeader';
import GameBoardTable from './GameBoardTable';
import Wrong from './Wrong';
import Background from './Background';

const GameBoard = ({ localUsername, gameName }) => {
  const [warningVisible, setWarningVisible] = useState(false);
  const [wrongAnswerDisplay, setWrongAnswerDisplay] = useState(0);
  const changeVisible = () => {
    setWarningVisible(true);
  };
  const resetGame = () => {
    setWarningVisible(false);
    setWrongAnswerDisplay(0);
  };
  const displayWrong = () => {
    setWrongAnswerDisplay(wrongAnswerDisplay + 1);
  };
  return (
    <div className="gameboard">
      <GameBoardHeader localUsername={localUsername} gameName={gameName} wrongAnswerDisplay={wrongAnswerDisplay}/>
      <GameBoardTable  displayWrong={displayWrong} checkGameScore={changeVisible}/>  
      {
        warningVisible ? <Wrong resetGame={resetGame}/> : null  
      }
      {
        warningVisible ? <Background /> : null
      }
    </div>
  )
};

export default GameBoard;