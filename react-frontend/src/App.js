import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import LandingPage from './LandingPage';
import Company from './Company';


//use hardcoded array of companies
const items=[{
        CompanyId: 1,
        CompanyName:'Marines',
        CompanyLogo:"Marines Logo",
        Summary:'United States Marine Corps',
        Description:'This is a description for the Marines',
        Need1:'Need1Marines',
        Need2:'Need2Marines',
        Need3:'Need3Marines'

},
{
      CompanyId: 2,
      CompanyName:'Navy',
      CompanyLogo:"Navy Logo",
      Summary:'This is the summary for the Navy',
      Description:'This is a description for the Navy',
      Need1:'Need1Navy',
      Need2:'Need2Navy',
      Need3:'Need3Navy'

},

{
  CompanyId: 3,
  CompanyName:'Airforce',
  CompanyLogo:"Airforce Logo",
  Summary:'This is the summary for the Airforce',
  Description:'This is a description for the Airforce',
  Need1:'Need1Airforce',
  Need2:'Need2Airforce',
  Need3:'Need3Airforce'

}

]

class App extends React.Component {
  render() {
    return (
      <div className="App">

  {/* display all the companies on the landing page */}
      {items.map(function(data, i){
        return (
          <div>
          <h1><LandingPage key={data.Component} landingPageData={items[i]}/></h1>
          
          {/* detail of the company that needs to live on a separate page*/}
          <Company  companyDetail={items[i]}/>
          </div>
        )
      })}
    </div>
    );
  }
}

export default App;
