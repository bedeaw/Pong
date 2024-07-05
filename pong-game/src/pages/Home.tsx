import React from 'react';
import logo from '../logo.svg';
import pongLogo from '../pongLogo.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className="App">
        <body>
            <div className="main"></div>
        </body>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={pongLogo} className='Pong-Logo' alt='pongLogo' />

          <Link to="/play" className='play'>
            Play
          </Link> 

          <Link to="/controls" className='link'>
            Controls
          </Link>

          <Link to="/about" className='link'>
            About
          </Link>
        </header>
      </div>
    );
  }

  export default Home;