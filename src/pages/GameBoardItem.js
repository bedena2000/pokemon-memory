import React from 'react';

const GameBoardItem = ({imageUrl, pokemonName, checkClicked}) => {
  return (
    <div className="gameboard-item" onClick={() => {
      checkClicked(pokemonName);
    }}>
        <img src={imageUrl} alt="" className="gameboard-item-img" />  
        <p className={`gameboard-item-title`}>{pokemonName}</p>
    </div>
  )  
};

export default GameBoardItem;
