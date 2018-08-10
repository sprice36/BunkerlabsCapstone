import React from 'react';
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
                <div className="social-media">
                    <div className="media1"><a  href="https://www.linkedin.com/company/bunkerlabs"><i class="fab fa-linkedin-in"></i></a></div> 
                    <div className="media"><a  href="https://www.facebook.com/thebunkerlabs"><i class="fab fa-facebook-f"></i></a></div>
                    <div className="media"><a  href="https://www.instagram.com/thebunkerlabs/"><i class="fab fa-instagram"></i></a></div>
                    <div className="media"><a  href="https://twitter.com/TheBunkerLabs" ><i class="fab fa-twitter"></i></a></div>
                </div>
            </div>
        </div>
        );
    };
}

export default Footer;