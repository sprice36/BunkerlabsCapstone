import React from 'react';
import {
    FormGroup,
    FormControl,
} from 'react-bootstrap';
import './Filter.css';

class FilterBy extends React.Component{

    _convertToDropDown = (option) => {
        return (
            <option value={option} key={option}>{option}</option>
        )
    };
    
    render(){
            return(
                <div className="filter-button">
                    <FormGroup controlId="formHorizontalSelect">
                            <FormControl className="filter-select-form" componentClass="select" 
                                name={this.props.type} 
                                defaultValue={this.props.value} 
                                onChange={(e) => 
                                {this.props.handleChange(e.target.value)}}>          
                                    {this.props.listItems.map(item => this._convertToDropDown(item))}
                            </FormControl >
                    </FormGroup>
                </div>
            )
        }
}


export default FilterBy;