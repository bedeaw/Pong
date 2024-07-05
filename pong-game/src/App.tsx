import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Play from './pages/Play';
import Controls from './pages/Controls';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='play' element={<Play />} />
        <Route path='controls' element={<Controls />} />
      </Routes>
    </Router>
  )
}

export default App;
