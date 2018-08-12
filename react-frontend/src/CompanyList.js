import React from 'react';
import {Link} from 'react-router-dom';
import './companyList.css'

class CompanyList extends React.Component {
    render() {

        let companies = this.props.filteredCompanies.map(company => (
                <div className="individualCompany" key={company._id}>
            <Link to={`/company/${company._id}`}>
                    {renderLogo(company.picture)}
                    <h3>{company.name}</h3>
            </Link>
                </div>
            )
        );
        
        return (
            <div className="company-container">
                    {companies}
            </div>
        );
    }  
}

function renderLogo(picture) {
        if (picture) {
            return (
                <img src={`http://localhost:4000/${picture}`} alt=""/>
            )
        } else {
            return (
                <img src={`http://localhost:4000/images/noimageavailable.jpg`} alt=""/>
            )
        }
    }

export default CompanyList;