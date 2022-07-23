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
import Login from './Login/Login'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import SignUp from './SignUp/SignUp';
import Signup from './SignUp/SignUp';
import TeslaAccount from './TeslaAccount/TeslaAccount';

function App() {
  const user = useSelector(selectUser)

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu />}
            <HeaderBlock />
          </Route>
          <Route exact path='/login'>
            {user ? <Redirect to='/teslaaccount' /> : <Login />}
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/teslaaccount'>
            {!user ? (
              <Redirect to='/login' />
            ) : (
              <>
                <TeslaAccount
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
                {isMenuOpen && <Menu />}
              </>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App