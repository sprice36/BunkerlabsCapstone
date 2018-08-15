
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
                    <NavItem className="individual-icon icon-left">
                        <Link to ='/' > 
                            <div>
                                <Link to={'/admin'}>
                                    <div className="words-nav"><h4>Admin</h4></div>
                                    <div className="icons-nav">
                                        <i value="Admin Panel "class="fas fa-2x fa-cogs" id="button-AdminPanel"></i> 
                                    </div>
                                </Link>
                            </div>
                        </Link>
                    </NavItem>
                    < NavItem className="individual-icon icon-right" >
                        <Link to ='/' > 
                        <div>
                            <Link to='/about'>
                            <div className="words-nav">
                                <h4>About</h4>
                            </div>
                            <div className="icons-nav">
                                <i class="fas fa-2x fa-info"></i>
                            </div>
                            </Link>
                        </div>
                        </Link>
                    </NavItem>
                </div>

                {/* <div classname="icon-container"> */}

                {/* <div>
                <Link to={'/admin'}><i value="Admin Panel "class="fas fa-cogs" id="button-AdminPanel"></i> </Link>
                </div> */}

                {/* <NavDropdown  className="about" eventkey={1} title='ABOUT US' id='basic-nav-dorpdown'> */}
                    {/* <MenuItem eventkey={1.1}> */}
                    {/* <div>
                        <Link to='/aboutMarketplace'>
                        <i class="fas fa-info"></i>
                        </Link>
                        </div> */}
                    {/* </MenuItem> */}
                {/* </NavDropdown> */}
                {/* </div> */}
            </Nav>
        </div>
    )}
}

export default Navbar;