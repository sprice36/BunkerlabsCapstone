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

    _createOption = (company) =>{
        return(
            
         <option value={company._id}>
         {company._id}
             {/* <Link to={`/admin/comapnies/${company._id}/edit`}>
            {company._id}
            </Link> */}
                </option>
                // select will have onChange event.target.value
        )
};
    _convertToCompany = (data) => {
        return (
           <li>
               
               <Link to={`/admin/companies/${data._id}/edit`}>
                {data.name}
               </Link>



           </li>
        )
    };
     
    _handleCompanySelect = (event) => {
        // console.log(event.target.value)
        this.props.history.push(`/admin/companies/${event.target.value}/edit`)
    }


        render() {
            console.log(this.props.history)
            return ( 
                <div>
            {/* <ul>react router link tag that ajax request jsut that compnies data */}
                    <ul>
                        {/* {this.state.companies.map(company => this._convertToCompany(company))}   */}
                        <li><button onClick={this.state.NewForm}>www.google.com</button></li>
                        
                    </ul>
                    <form>
                    <select onChange={this._handleCompanySelect}>
                   {this.state.companies.map(company => this._createOption(company))}
                   </select>
                   
                   </form>
                    
                    <Link to={`admin/companies/new`}>
                        <button>New Company</button>
                    </Link>
                    </div>
            );
        }
    }
export default adminPage;