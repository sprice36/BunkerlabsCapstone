import React from 'react';
import './LandingPage.css';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import CompanyList from './CompanyList';

class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            companies:[],
            searchText: ''
        }
    }

    componentDidMount(){
        const url=`http://localhost:4000/api/companies/`;
        let industryList = [];
        let stageList = [];
        let companyNameList = [];
        fetch(url)
            .then(companies=>companies.json())
            .then(companies=>{
                this.setState({
                    companies
                }, () => {
                    this.state.companies.forEach(company => {
                        stageList.push(company.industry);
                    });
                    this.state.companies.forEach(company => {
                        industryList.push(company.stage);
                    });
                    this.state.companies.forEach(company => {
                        companyNameList.push(company.name);
                    });
                    }
                );
            });
    }

    _updateSearchText = (newSearchText) => {
        this.setState({
            searchText: newSearchText
        });
    }

    _retrieveCompaniesBySearch = () => {
        // Is there search text? 
        // If so, filter
        // If not, return all
        if (this.state.searchText !== '') {
            let filteredCompanies = this.state.companies.filter(company => {
                let doesNameMatch = company.name.toLowerCase().includes(this.state.searchText.toLowerCase());
                // let doesContentMatch = note.content.toLowerCase().includes(this.state.searchText.toLowerCase());
                return doesNameMatch
            });
            return filteredCompanies
        } else {
            return this.state.companies
        }
    }

    _renderSingleCompany = (company) => {
        return (
                <SingleCompany companyInfo={company} key={company._id}/>
        )
    }

    render(){
    return(
            <div>
                <SearchBar text={this.state.searchText} 
                handleChange={this._updateSearchText} />

                <CompanyList filteredCompanies={this._retrieveCompaniesBySearch()} />

                <div className="companyContainer">
                    {/* {this.state.companies.map(this._renderSingleCompany)} */}

                    <Link to={'/admin'} >
                        <button>Admin Panel</button>
                    </Link>
                </div>
            </div>
        )
    }
}

    function renderLogo(picture) {
        if (picture) {
            return (
                <img src={`http://localhost:4000/${picture}`} alt=""/>
            )
        } else {
            return (
                <img src={`http://localhost:4000/images/nologo.jpg`} alt=""/>
            )
        }
    }

    const SingleCompany = (props) => {
        return (
            <Link to={`/company/${props.companyInfo._id}`}>
                <div className="individualCompany">
                    {renderLogo(props.companyInfo.picture)}
                    <h3>{props.companyInfo.name}</h3>
                </div>
            </Link>
        )
    }
    
export default Homepage;