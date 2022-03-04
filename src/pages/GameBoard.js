import React from 'react';
import './GameBoard.css';

import GameBoardHeader from './GameBoardHeader';
import GameBoardTable from './GameBoardTable';

const GameBoard = ({ localUsername, gameName }) => {
  return (
    <div className="gameboard">
      <GameBoardHeader localUsername={localUsername} gameName={gameName}/>
      <GameBoardTable />  
    </div>
  )
};

export default GameBoard;