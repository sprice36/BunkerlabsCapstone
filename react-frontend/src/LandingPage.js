import React from 'react';
import './LandingPage.css';
import {Link} from 'react-router-dom';
// import Data from './Data';
import Filter from './Filter';

class API extends React.Component{
    constructor(props){
        super(props);
        this.state={
            companies:[]
        }
    }

    componentDidMount(){
        const url=`http://localhost:4000/api/companies/`;
        fetch(url)
            .then(companies=>companies.json())
            .then(companies=>{
                this.setState({
                    companies
                });
            });
    }

    render(){
    return(
        <LandingPage companies={this.state.companies}/>
        )
    }
}

    const LandingPage=({companies})=>
    <div className="landingPage">
    <Filter industry={companies.industry}/>
        {companies.map(function(companyData){
        return(
            <div key={companyData._id}>
                <Link to={`/company/${companyData._id}`}>
                <img src={`http://localhost:4000/${companyData.picture}`} alt=""/>
                <h1>{companyData.name}</h1>
                </Link>
            </div>
            )}
        )}

        <Link to={'/admin'} >
            <button>Admin Panel</button>
        </Link>
    </div>    
    

export default API;