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

          <Link to="/about" className='link'>
            About
          </Link>

          {/* <a
            className="App-link"
            href="https://github.com/bedeaw/Pong_Client"
            target="_blank"
            rel="noopener noreferrer"
          >
            Client Repo
          </a>
          <a
            className="App-link"
            href="https://github.com/bedeaw/Pong_Server"
            target="_blank"
            rel="noopener noreferrer"
          >
            Server Repo
          </a> */}
        </header>
      </div>
    );
  }

  export default Home;