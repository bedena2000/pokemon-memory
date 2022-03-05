import React, { useState, useEffect } from 'react';

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

const pokemonData = [
  {
    imageSrc: pok1,
    name: 'Blastoise',
    id: 1
  },
  {
    imageSrc: pok2,
    name: 'Butterfree',
    id: 2,
  },
  {
    imageSrc: pok3,
    name: 'Celebi',
    id: 3,
  },
  {
    imageSrc: pok4,
    name: 'charizard',
    id: 4
  },
  {
    imageSrc: pok5,
    name: 'Charmander',
    id: 5
  },
  {
    imageSrc: pok6,
    name: 'Chikorita',
    id: 6
  },
  {
    imageSrc: pok7,
    name: 'Darkrai',
    id: 7
  },
  {
    imageSrc: pok8,
    name: 'Dragonite',
    id: 8
  },
  {
    imageSrc: pok9,
    name: 'Eevee',
    id: 9
  },
  {
    imageSrc: pok10,
    name: 'Haunter',
    id: 10
  },
  {
    imageSrc: pok11,
    name: 'Leafeon-Eevee',
    id: 11
  },
  {
    imageSrc: pok12,
    name: 'Magikarp',
    id: 12
  },
  {
    imageSrc: pok13,
    name: 'Squirlte',
    id: 13
  },
  {
    imageSrc: pok14,
    name: 'Swampert',
    id: 14
  },
  {
    imageSrc: pok15,
    name: 'Vaporeon',
    id: 15
  },
  {
    imageSrc: pok16,
    name: 'Zapdos', 
    id: 16
  },
];

const GameBoardTable = ({checkGameScore, displayWrong}) => {
  
  // Random Array
  const [randomArray, setRandomArray] = useState([]);
  const [newArray, setNewArray] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [ui, setUi] = useState([]);
  const [wrong, setWrong] = useState(0);
  const [changer, setChanger] = useState(0);
  const randomizer = () => {
    var size =  15, arr = [], pool = [];
    for(var i = 0; i <= size; i++) {
        arr.push(i);
    }
    for(var i = 0; i <= size; i++) {
      var value =  arr.splice(Math.floor(Math.random() * ((size-i) - 1) + 1),1);
      pool.push(value.pop());
    }
    return pool;
  };
  const randomArrayNumber = randomizer();
  let newArrayWithItems = [];
  randomArrayNumber.map(item => {
    pokemonData.map(subItem => {
      if(subItem.id === item + 1) {
        newArrayWithItems.push(subItem);
      }
    })
  })
  useEffect(() => {
    console.log(wrong);
    if(wrong === 3) {
      console.log("you lose");
      setWrong(0);
      checkGameScore();
    }
  }, [wrong]);
  const checkClicked = (pokemonName) => {
    setChanger(changer + 1);
    if(!selectedItem.includes(pokemonName)) {
      setSelectedItem([...selectedItem, pokemonName]);
    } else {
      setWrong(wrong + 1);
      displayWrong();
    }
  };
  return (
    <div className="gameboard-table container">
      {
        newArrayWithItems.map((item) => 
          <GameBoardItem imageUrl={item.imageSrc} pokemonName={item.name} key={item.id} checkClicked={checkClicked}/>
        )
      }
      
    </div>
  )
};

export default GameBoardTable;