import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.scss';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: '',
            error: false
         }
    }

    render() { 
        return ( 
            <div className="login">
                <h1>Novajob</h1>
                <form action="">
                    <input type="text"/>
                    <button>anmelden</button>
                </form>
            </div>
         );
    }
}

export default Login;