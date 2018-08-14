import React from 'react';
import './LandingPage.css';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import CompanyList from './CompanyList';
import FilterBy from './FilterBy';

class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            companies:[],
            searchText: '',
            industryFilter: 'All',
            stageFilter: 'All',
            industryList: [],
            stageList: []
        }
    }

    componentDidMount(){
        const url=`http://localhost:4000/api/companies/`;
        let industries = ['All'];
        let stages = ['All'];
        fetch(url)
            .then(companies=>companies.json())
            .then(companies=>{
                this.setState({
                    companies
                }, () => {
                    this.state.companies.forEach(company => {
                        if (stages.includes(company.stage) === false) {
                            stages.push(company.stage);
                        }
                    });
                    this.state.companies.forEach(company => {
                        if (industries.includes(company.industry) === false) {
                            industries.push(company.industry);
                        }
                    });
                    })
                    }
                )
            .then((() => {
                this.setState({
                    industryList: industries,
                    stageList: stages 
                })
            }));
    }

    _updateSearchText = (newSearchText) => {
        this.setState({
            searchText: newSearchText
        });
    }

    _updateIndustryFilter = (newIndustryFilter) => {
        this.setState({
            industryFilter: newIndustryFilter
        })
    }
    
    _updateStageFilter = (newStageFilter) => {
        this.setState({
            stageFilter: newStageFilter
        })
    }

    _retrieveCompaniesByFilterAndSearch = () => {
        // Is there a filter ? 
        // If so, filter
        // If not, return all
        let doesSearchMatchName
        let doesIndustryMatch;
        let doesStageMatch;
        if (this.state.industryFilter !== 'All' || this.state.stageFilter !== 'All' || this.state.searchText !== '') {
            let filteredCompanies = this.state.companies.filter(company => {
                if (this.state.industryFilter === 'All') {
                    doesIndustryMatch = true
                } else {
                    doesIndustryMatch = company.industry.toLowerCase().includes(this.state.industryFilter.toLowerCase());
                }
                if (this.state.stageFilter === 'All') {
                    doesStageMatch = true
                } else {
                    doesStageMatch = company.stage.toLowerCase().includes(this.state.stageFilter.toLowerCase());
                }
                if (this.state.searchText === '') {
                    doesSearchMatchName = true
                } else {
                    doesSearchMatchName = company.name.toLowerCase().includes(this.state.searchText.toLowerCase());
                }
                return doesIndustryMatch && doesStageMatch && doesSearchMatchName
            });
            return filteredCompanies
        } else {
            return this.state.companies
        }
    }

    render(){

        
        return(
            <div>
                <div className="homepage-container">
            {/* This should be moved to the navbar component */}
                    <Link to={'/login'} >
                        <button className="Admin-panel">ADMIN PANEL</button>
                    </Link>
            { /* This should be moved to the navbar component */ }

                <div>
                <SearchBar text={this.state.searchText} 
                handleChange={this._updateSearchText} />
                </div>
                
                <div className='filter-container'>
                    <FilterBy type='industry' listItems={this.state.industryList} value={this.state.industryFilter} handleChange={this._updateIndustryFilter}/>
                    <FilterBy type='stage' listItems={this.state.stageList} value={this.state.stageFilter} handleChange={this._updateStageFilter}/>
                </div>

                <CompanyList filteredCompanies={this._retrieveCompaniesByFilterAndSearch()} />

                </div>
            </div>
        )
    }
}
    
export default Homepage;