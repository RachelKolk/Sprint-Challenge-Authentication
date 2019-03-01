import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import './App.css';
import Jokes from './components/Jokes';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink to="/register">Sign Up</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/login">Sign In</NavLink>
          </nav>

        </header>

        <main>
          <Route exact path="/register"
            render={props => <RegistrationForm {...props}/> } />
          <Route path="/login" 
            render={props => <LoginForm {...props} /> } />
          <Route path="/jokes"
            render={props => <Jokes {...props} /> } />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
