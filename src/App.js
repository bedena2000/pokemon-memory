import React, { useState, useEffect } from 'react';
import './main.css';

// Pages
import WelcomeMenu from './pages/WelcomeMenu';
import GameBoard from './pages/GameBoard';

function App() {
  const [welcomeMenu, setWelcomeMenu] = useState(true);
  const [gameMenu, setGameMenu] = useState(false);
  const [username, setUsername] = useState('');
  const welcomeMenuShow = () => {
    setWelcomeMenu(false);
    setGameMenu(true);
    localUsername = localStorage.getItem("username");
  }
  let localUsername = '';
  const getUserName = (value) => {
    localStorage.setItem("username", value);
    setUsername(value);
  };
  // const setUiUsername = () => {
  //   console.log(username);
  // };
  return (
    <div className="App">
      {
        welcomeMenu ? <WelcomeMenu gameStarter={welcomeMenuShow} getUserName={getUserName}/> : null
      }
      {
        
        gameMenu ? <GameBoard localUsername={localUsername} gameName={username}/> : null
      }
    </div>
  );
}

export default App;
