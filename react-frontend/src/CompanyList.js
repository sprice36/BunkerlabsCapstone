import React from 'react';
import {Link} from 'react-router-dom';
import './companyList.css'

class CompanyList extends React.Component {
    render() {
        // let companyRows = []
        // let companyRow = []
        // let companies = this.props.filteredCompanies;
        // for (let i = 0; i < companies.length; ++i) {
        //     if ((i > 0 && i % 3 === 0) || i === companies.length - 1) {
        //         companyRows.push(
        //             <div className="company-container">
        //                 {companyRow}
        //             </div>
        //         )
        //         companyRow  = []
        //     }
        //     companyRow.push(
        //         <div className="individualCompany" key={companies[i]._id}>
        //             <Link to={`/company/${companies[i]._id}`}>
        //                     {renderLogo(companies[i].picture)}
        //                     <h3>{companies[i].name}</h3>
        //             </Link>
        //         </div>
        //     )
        // }

        let companies = this.props.filteredCompanies.map(company => (
                <div className="individualCompany" key={company._id}>
            <Link to={`/company/${company._id}`}>
                    {renderLogo(company.picture)}
                    <div className="homepage-name-container">
                        <h4 >{company.name}</h4>
                    </div>
            </Link>
                </div>
            ))
        
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
                <div className="company-image-container">
                    <img className="company-list-image" src={`http://localhost:4000/${picture}`} alt=""/>
                </div>
            )
        } else {
            return (
                <div className="company-image-container">
                    <img className="company-list-image" src={`http://localhost:4000/images/default/noimageavailable.jpg`} alt=""/>
                </div>
            )
        }
    }

export default CompanyList;