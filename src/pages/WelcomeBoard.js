import React, { useState } from 'react';
import Warning from './Warning';

const WelcomeBoard = ({ gameStarter, getUserName }) => {
  const [text, setText] = useState('');
  const [warning, setWarning] = useState(false);
  const checkBtn = (event) => {
    if(text) {
      gameStarter();
    } else {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 3000);
    }
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="welcome-board">
      <div className="username">Please enter the name</div>
      <input type="text" value={text} onChange={handleChange} className="username-input" />
      <button className="username-btn" onClick={() => {
        getUserName(text);
        checkBtn();
      }}>start</button>
      {warning ? <Warning /> : null}
    </div>
  )
};

export default WelcomeBoard;