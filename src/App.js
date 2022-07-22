import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import MenuItem from './MenuItem/MenuItem';
import Menu from './Menu/Menu';
import HeaderBlock from './HeaderBlock/HeaderBlock';

function App() {
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  return (
    <Router>
      <div className="App">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen && <Menu/>}
        <HeaderBlock/>
      </div>
    </Router>
  );
}

export default App;
