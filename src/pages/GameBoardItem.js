import React from 'react';

const GameBoardItem = ({imageUrl}) => {
  return (
    <div className="gameboard-item">
        <img src={imageUrl} alt="" className="gameboard-item-img" />  
        <p className={`gameboard-item-title`}>Blastoise</p>
    </div>
  )  
};

export default GameBoardItem;
