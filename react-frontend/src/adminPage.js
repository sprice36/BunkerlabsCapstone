import React from 'react';
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
            {company.name}
        </option>
        )
    };

    _convertToCompany = (data) => {
        return (
            <li>
                <Link to={`/admin/companies/edit/${data._id}`}>
                    {data.name}
                </Link>
            </li>
        )
    };

    _handleCompanySelect = (event) => {
        this.props.history.push(`/admin/companies/edit/${event.target.value}`)
    }

    render() {
        return (
            <div>
                <form>
                    <select onChange={this._handleCompanySelect}>
                        <option value="" defaultValue></option>
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