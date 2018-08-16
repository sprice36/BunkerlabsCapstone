
import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import './Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{

    render(){
    return(
        <div>
            <div className="orange-area"></div>
            
            <Nav className="navbar-nav">
                <NavItem className="image-nav">
                    <Link to ='/' > 
                        <img className="navbar-logo" src={require('./BunkerLogo.png')} alt="BunkerLabs Logo"/>
                    </Link>
                </NavItem>

                <div className='icon-container'>
                    <NavItem className = "individual-icon icon-left">
                        <Link to ='/' > 
                            <div>
                                <Link to={'/admin'}>
                                    <div className="words-nav"><h4>Admin</h4></div>
                                    <div className="icons-nav">
                                        <i value="Admin Panel" className="fas fa-2x fa-cogs" id="button-AdminPanel"></i> 
                                    </div>
                                </Link>
                            </div>
                        </Link>
                    </NavItem>
                    <NavItem className = "individual-icon icon-right">
                        <Link to ='/' > 
                        <div>
                            <Link to='/about'>
                            <div className="words-nav">
                                <h4>About</h4>
                            </div>
                            <div className="icons-nav">
                                <i className="fas fa-2x fa-info"></i>
                            </div>
                            </Link>
                        </div>
                        </Link>
                    </NavItem>
                </div>
            </Nav>
        </div>
    )}
}

export default Navbar;