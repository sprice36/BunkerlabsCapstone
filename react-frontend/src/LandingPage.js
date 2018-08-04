import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.landingPageData;
    }

    handleClickLink=()=>{
        alert(this.state.CompanyId)
    }
    render() {
        return (
            <div className="landingPage">
                <button onClick={(e) => this.handleClickLink() }>
                    {this.props.landingPageData.CompanyLogo}       
                </button>
                
                <p>{this.props.landingPageData.CompanyName}</p>
            </div>
        );
    }
}


export default LandingPage;