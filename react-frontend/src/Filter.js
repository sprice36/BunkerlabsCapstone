import React, { Component } from 'react';
import Dropdown from './Dropdown';
import './Filter.css';

class Filter extends React.Component{
        render(){
            return(
                <div className="filter-button">
                <Dropdown direction ="right" dropDownItems={['industry1', 'industry2']} text="Select the industry"/>
                <Dropdown direction="right" dropDownItems={['stage1','stage2']} text= "Select the stage"/>
                </div>
            )
        }
        
}

export default Filter;