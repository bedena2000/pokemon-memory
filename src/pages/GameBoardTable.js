import React from 'react';

// Pictures
import GameBoardItem from './GameBoardItem';
import pok1 from '../img/Blastoise.png';
import pok2 from '../img/butterfree.png';
import pok3 from '../img/Celebi.png';
import pok4 from '../img/charizard.png';
import pok5 from '../img/Charmander.png';
import pok6 from '../img/Chikorita.png';
import pok7 from '../img/Darkrai.png';
import pok8 from '../img/dragonite.png';
import pok9 from '../img/Eevee.png';
import pok10 from '../img/haunter.png';
import pok11 from '../img/Leafeon-Eevee.png';
import pok12 from '../img/magikarp.png';
import pok13 from '../img/Squirlte.png';
import pok14 from '../img/swampert.png';
import pok15 from '../img/Vaporeon.png';
import pok16 from '../img/Zapdos.png';

const GameBoardTable = () => {
  return (
    <div className="gameboard-table container">
      <GameBoardItem imageUrl={pok1}/>
      <GameBoardItem imageUrl={pok2}/>
      <GameBoardItem imageUrl={pok3}/>
      <GameBoardItem imageUrl={pok4}/>
      <GameBoardItem imageUrl={pok5}/>
      <GameBoardItem imageUrl={pok6}/>
      <GameBoardItem imageUrl={pok7}/>
      <GameBoardItem imageUrl={pok8}/>
      <GameBoardItem imageUrl={pok9}/>
      <GameBoardItem imageUrl={pok10}/>
      <GameBoardItem imageUrl={pok11}/>
      <GameBoardItem imageUrl={pok12}/>
      <GameBoardItem imageUrl={pok13}/>
      <GameBoardItem imageUrl={pok14}/>
      <GameBoardItem imageUrl={pok15}/>
      <GameBoardItem imageUrl={pok16}/>
    </div>
  )
};

export default GameBoardTable;