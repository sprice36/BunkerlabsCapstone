import React, { Component } from 'react';
import './LandingPage.css';
import {Link} from 'react-router-dom';
import Data from './Data';

  
    const LandingPage=()=>
    <div className="landingPage">
      {Data.map(function(companyData){
        return(
            <div>
                <Link to={`/company/${companyData.CompanyId}`}>
                <h1>{companyData.CompanyName}</h1>
                <h1>{companyData.CompanyLogo}</h1>
                </Link>
            </div>
        )  
      }
    )}

    </div>    
    

export default LandingPage;