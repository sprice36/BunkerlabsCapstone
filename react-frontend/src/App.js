import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import LandingPage from './LandingPage';
import Company from './Company';
import Router from './Router';

class App extends React.Component {
  render() {
    return (
        <div className="App">
         <Router />  
        </div>
      
    );
  }
}

export default App;
