import React from 'react';

// const {
//     getLoginBody
// } = require('../models/admin');

class adminLogin extends React.Component {
    constructor(props){
        super(props);
    
    this.state =  {
        username : '',
        password : ''
    } 
}

componentDidMount() {
        //check local storage for token and if its there setState to token : token
        //if it doesnt exists or expired redirect to login
        let localToken = localStorage.getItem('token');
        if (localToken) {
            this.props.history.push('admin');
        } 
    }

handleUsername = (event) => {
    this.setState({
        username : event.target.value
    })
}

handlePassword = (event) => {
    this.setState({
        password : event.target.value
    })
}

handleLogin = () => {
    //DO POST REQUEST
    var serverRequest = 'http://localhost:4000/api/admin';
    var loginBody = {
        username : this.state.username,
        password : this.state.password 
    }

    fetch(serverRequest, {
        headers: new Headers({
            "Content-type" : "application/json"  
        }),
        body: JSON.stringify(loginBody) , 
        method : "POST"
    })
    .then((data) => data.text()
    )
    .then((data) => {
        //if password is correct store token in local storage
        if (this.state.password !== data){
        //store in local Storage
        localStorage.setItem('token', JSON.stringify(data))
        this.props.history.push('./admin')
        }
    })
}


render(){ 
    return (
        <div>
            <div>username</div>
                <input onChange={this.handleUsername}
                type="text"
                value={this.state.username}
                />
            
                <div>password </div>
                <input onChange={this.handlePassword}
                type="text"
                value={this.state.password}
                />
            
                <br></br>
            
                <button onClick={this.handleLogin}>Login</button>

            </div>
        );
    };
}

export default adminLogin;