import React from 'react';
import {
    FormGroup,
    FormControl,
} from 'react-bootstrap';

class SearchBar extends React.Component{
    render() {
        return (
            <div>
                    <FormGroup controlId="formHorizontalText" className="search-bar">
                            <FormControl type="text" placeholder="Company Name" value={this.props.text}  onChange={(e) => 
                            {this.props.handleChange(e.target.value)}}
                            placeholder = "Search Company Name" />
                    </FormGroup>
            </div>
        );
    }
}

export default SearchBar;