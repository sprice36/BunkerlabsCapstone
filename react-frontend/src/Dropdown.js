import React, { Component, Fragment} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu,DropdownItem} from 'reactstrap';


class Menu extends React.Component{

    constructor(props){
        super(props);
        this.toggle=this.toggle.bind(this);
        this.state={
            dropdownOpen:false
        };
    }

    toggle(){
        this.setState(prevState=>({
            dropdownOpen:!prevState.dropdownOpen
        }))
    }
        render(){
            return(
                <Dropdown direction={this.props.direction} isOpen={this.state.btnDropright} toggle={() =>
                     { this.setState({ btnDropright: !this.state.btnDropright }); }}>
                     <DropdownToggle caret>
                        {this.props.text}
                    </DropdownToggle>

                    <DropdownMenu>
                        {this.props.dropDownItems.map(dropDownItem=>
                            <Fragment>
                                <DropdownItem> {dropDownItem}</DropdownItem>
                                <br/>
                            </Fragment>

                        )}
                    </DropdownMenu>  
                </Dropdown>

            )

        }
    }


export default Menu;