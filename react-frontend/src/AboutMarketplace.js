import React from 'react';
import './AboutMarketplace.css'


class AboutMarketplace extends React.Component{

    render(){
        return(
        <div className="aboutMarketplace">
            <div className="about-marketplace-outer">
            <div className="about-marketplace-inner">
            <p>
                Bunker Labs company marketplace is a space 
                where users can view and connect with veteran-owned
                businesses. Even though each business is unique, 
                they all share a common trait in being owned or managed 
                by a military veteran here in Atlanta. 
                <br/>
                <br/>
                Our online platform 
                displays each company's logo, their title, a summary of
                their business, up to three needs the company may have, 
                their contact information, their website, a picture of 
                the CEO or owner, the company's industry and the current 
                stage that the company is in. 
                <br/>
                <br/>
                We believe each veteran 
                entrepreneur should have access to all of the resources 
                available and this platform allows them to market their 
                company to future employees, investors, or volunteers.
            </p>
            </div>
            </div>
        </div>          
    )}
}

export default AboutMarketplace;