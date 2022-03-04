import React from 'react';
import './GameBoard.css';

import GameBoardHeader from './GameBoardHeader';
import GameBoardTable from './GameBoardTable';

const GameBoard = ({ localUsername }) => {
  return (
    <div className="gameboard">
      <GameBoardHeader localUsername={localUsername}/>
      <GameBoardTable />  
    </div>
  )
};

export default GameBoard;