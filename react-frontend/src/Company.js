import React, { Component } from 'react';
import './Company.css';

class Company extends React.Component{
        render() {
            return (
                <div className="div-Company">This is the description of a company:
                <h3> 
                <p>Company Name:{this.props.companyDetail.CompanyName}</p>
                <p>Company Logo: {this.props.companyDetail.CompanyLogo}</p>
                <p>Summary:{this.props.companyDetail.Summary}</p>
                <p>Company detailed description:{this.props.companyDetail.Description}</p>
                <p>Top Three needs:
                <li>
                {this.props.companyDetail.Need1}</li>
                <li>{this.props.companyDetail.Need2}</li>
                <li>{this.props.companyDetail.Need3}</li>
                </p>
                </h3>
                </div>
            )
        }
    }
    
    



export default Company;