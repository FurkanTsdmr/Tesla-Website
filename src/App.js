import React from 'react';
import './App.css';
import Header from './Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Header />
        {/* HeaderBlock */}
      </div>
    </Router>
  );
}

export default App;
