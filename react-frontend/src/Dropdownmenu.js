import React, { Component } from 'react';

class Dropdownmenu extends React.Component {
    state = {
        companies: []
    }

    componentDidMount() {
        fetch('http://localhost:4000/api/companies')
        .then(res => res.json())
        .then(companies => {
            console.log(companies)
            this.setState({companies});
         })
        
    }
    _convertToCompany = (data) => {
        return (
            <div>
                {data.name},
                {data.summary},
                {data.picture},
                {data.industry},
                {data.stage},
                {data.productsAndServices},
                {data.needs},
                {data.website},
                {data.email},
                {data.youtubeLink}
                </div>
                
         ) 
}
    _pullCompanyName = (data) => {
        <div>
            {data.name}
            </div>
    }
        render() {
            return ( 
                <div>
                    {this.state.companies.map(company => this._convertToCompany(company))}
                    
                    <ul>
                        <li><a href='www.google.com'>www.google.com</a></li>
                        <li><a href='www.yahoo.com'>www.yahoo.com</a></li>
                        <li><a href='www.facebook.com'>www.facebook.com</a></li>
                        <li><a href='www.reddit.com'>www.reddit.com</a></li>
                        
                    </ul>
                    </div>
            );
        }
    }
export default Dropdownmenu;