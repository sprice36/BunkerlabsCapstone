import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom';
import BunkerForms from './BunkerForms';
let App = () => 
  <Router>
    <div className='app'>
      <Switch>
        <Route path='/' component={ BunkerForms } />
        </Switch>
        </div>
        </Router>
      
export default App;
