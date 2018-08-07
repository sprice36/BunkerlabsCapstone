import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import LandingPage from './LandingPage';
import Company from './Company';
// import Router from './Router';
import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom';
import BunkerForms from './btest';
import adminPage from './adminPage';
import EditPage from './EditPage';
import NewForm from './NewForm';



class App extends React.Component {
  render() {
    return (
        <div className="App">
       
        <Router>
        <Switch>
        <Route path='/admin' component={ adminPage } exact={true}/>
        <Route path='/admin/companies/:id/edit' component={ EditPage } exact={true}/>
        <Route path='/admin/companies/new' component={ NewForm } exact={true}/>

        <Route path='/company/:id' component={Company} exact={true}/>
        <Route path='/' component={LandingPage} exact={true}/>

        </Switch>
        </Router>
                
        </div>
      
    );
  }
}

export default App;
