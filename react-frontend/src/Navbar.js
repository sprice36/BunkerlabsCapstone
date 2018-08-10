
import React, { Component } from 'react';
import { Nav, NavItem, NavLink,NavDropdown,MenuItem } from 'react-bootstrap';
import './Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{

    render(){
    return(
        <div>
            <div className="orange-area"></div>
            <Nav className="navbar-nav">
                <NavItem className="image-nav">
                      <Link to ='/' > <img src={require('./BunkerLogo.png')}/></Link>
                        {/* <NavLink>About</NavLink> */}
                </NavItem>
                <NavDropdown  className="about" eventkey={1} title='ABOUT US' id='basic-nav-dorpdown'>
                    <MenuItem eventkey={1.1}><Link to='/aboutMarketplace'>About Bunker Labs Marketplace</Link></MenuItem>
                </NavDropdown>
            </Nav>
        </div>
    )}
}



export default Navbar;