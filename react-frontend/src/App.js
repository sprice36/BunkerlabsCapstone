import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import LandingPage from './LandingPage';
import Company from './Company';
import Router from './Router';
import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom';
import BunkerForms from './BunkerForms';

class App extends React.Component {
  render() {
    return (
        <div className="App">
       
        <Router>
        <Switch>
        <Route path='/' component={ BunkerForms } />
        </Switch>
        </Router>
                
        </div>
      
    );
  }
}

export default App;
