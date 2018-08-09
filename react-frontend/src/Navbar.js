
import React, { Component } from 'react';
import { Nav, NavItem, NavLink,NavDropdown,MenuItem } from 'react-bootstrap';
import './Navbar.css';

class Navbar extends React.Component{

    render(){
    return(

        <div>
            <div className="orange-area"></div>
            <Nav className="navbar-nav">
                <NavItem className="image-nav">
                        <img src={require('./BunkerLogo.png')}/>
                        {/* <NavLink>About</NavLink> */}
                </NavItem>
                <NavDropdown  classname="about" eventkey={1} title='ABOUT US' id='basic-nav-dorpdown'>
                    <MenuItem eventkey={1.1}>About Bunker Labs Marketplace</MenuItem>
                </NavDropdown>
            </Nav>
        </div>
    )
    }
}



export default Navbar;