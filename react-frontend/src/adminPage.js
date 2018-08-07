import React, { Component } from 'react';
import NewForm from './NewForm';
import {Link} from 'react-router-dom';
class adminPage extends React.Component {
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
           <li>
               
               <Link to={`/admin/companies/${data._id}/edit`}>
                {data.companyNameForAdmin}
               </Link>



           </li>
        )
    };
    
        render() {
            return ( 
                <div>
            {/* <ul>react router link tag that ajax request jsut that compnies data */}
                    <ul>
                        {this.state.companies.map(company => this._convertToCompany(company))}  
                        <li><button onClick={this.state.NewForm}>www.google.com</button></li>
                        
                    </ul>
                    

                    
                    <Link to={`admin/companies/new`}>
                        <button>New Company</button>
                    </Link>
                    </div>
            );
        }
    }
export default adminPage;