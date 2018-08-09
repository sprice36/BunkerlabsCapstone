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
              </option>
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
                    <form>
                    <select onChange={this._handleCompanySelect}>
                   {this.state.companies.map(company => this._createOption(company))}
                   </select>
                    </form>
                     <Link to={`/admin/companies/new`}>
                        <button>New Company</button>
                    </Link>
                    </div>
            );
        }
    }
export default adminPage;