import React from 'react';
import {Link} from 'react-router-dom';

class adminPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            companies: [],
            token : "",
            redirect : false
        }
    }

    componentDidMount() {
        //check local storage for token and if its there setState to token : token
        //if it doesnt exists or expired redirect to login
        let localToken = localStorage.getItem('token');
        if (localToken) {
            this.setState({
                token: localToken
            })
        } else {
            this.props.history.push('/login');
        }

        fetch('http://localhost:4000/api/companies')
        .then(res => res.json())
        .then(companies => {
            this.setState({companies});
        })
    }

    _createOption = (company) =>{
        return(
            
        <option value={company._id} key={company._id}>
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