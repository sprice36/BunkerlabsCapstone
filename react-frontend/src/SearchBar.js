import React from 'react';

class SearchBar extends React.Component{
    render() {
        return (
            <div className="">
                <input value={this.props.text} 
                onChange={(e) => 
                {this.props.handleChange(e.target.value)}} 
                type="text"
                placeholder="Search"/>
            </div>
        );
    }
}

export default SearchBar;