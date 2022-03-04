import React from 'react';
import logo from '../img/pakeball.png';

const GameBoardHeader = ({ localUsername }) => {
  return (
    <header className="gameboard-header">
      <div className="container header-container">
        <div className="header-left">
          <img src={logo} alt="logo"  className="header-logo"/>
          <h1 className="header-text">POKEMON MEMORY</h1>
        </div>
        <div className="score">
          <p className="score-text">{localUsername}</p>  
          <div className="score-number">
            <span className="score-number-text">score</span>
            <span className="score-number-number">0</span>
          </div>
        </div>
      </div>
    </header>
  )
};

export default GameBoardHeader;