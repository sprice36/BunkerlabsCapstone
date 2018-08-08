import React, { Component } from 'react';
import './Footer.css';

class Footer extends React.Component{

    render(){
        return(

            <div className="outer-div">
            <footer className="footer" >
                <p>
                    Bunker Labs
                    <br/>
                    3423 Piedmont Rd
                    <br/>
                     NE Atlanta, Ga 30305
                </p>
               
            </footer>
             <div className="black">@2018 Bunker Labs NFP. All Rights Reserved. |
             <a className="footer-class" href="https://bunkerlabs.org/privacy-policy/" data-wpel-link="internal">Privacy Policy</a> | Terms of Use	
             </div>
       </div>
        )
    }
}


export default Footer;