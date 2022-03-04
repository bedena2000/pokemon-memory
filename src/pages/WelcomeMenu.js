import React, { useEffect } from 'react';
import './Main.css';

import WelcomeText from './WelcomeText';
import WelcomeBoard from './WelcomeBoard';

const WelcomeMenu = ({ gameStarter, getUserName }) => {
  useEffect(() => {
    return () => {
      document.querySelector("body").style.backgroundColor = "#9e9ea1";
    };
  });
  return (
    <div className="welcome-menu">
      <WelcomeText />
      <WelcomeBoard gameStarter={gameStarter} getUserName={getUserName}/>
    </div>
  )
};

export default WelcomeMenu;