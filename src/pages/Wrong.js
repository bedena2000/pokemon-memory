import React from 'react';

const Wrong = ({resetGame}) => {
  return (
    <div className="lose-board">
      <h2 className="lose-title">You Lose</h2>
      <button onClick={resetGame} className="reset-btn">Reset</button>  
    </div>
  )
};

export default Wrong;