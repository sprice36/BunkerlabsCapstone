import React, { Component } from 'react';
import './Company.css';
import Data from './Data';

    const Company=({companyDetail})=>
                <div className="div-Company">This is the description of a company:
                <h3> 
                <p>Company Name:{companyDetail.CompanyName}</p>
                <p>Company Logo: {companyDetail.CompanyLogo}</p>
                <p>Summary:{companyDetail.Summary}</p>
                <p>Company detailed description:{companyDetail.Description}</p>
                <p>Top Three needs:
                <li>
                {companyDetail.Need1}</li>
                <li>{companyDetail.Need2}</li>
                <li>{companyDetail.Need3}</li>
                </p>
                </h3>
                </div>
    

    
    
    const withRouter=(props)=>{
        const id=props.match.params.id;
        console.log(id);
        const oneCompanyMatch= Data.find(company=>company.CompanyId===id);
        return (
             <Company companyDetail={oneCompanyMatch}/>
        )

    }
    
    



export default withRouter;