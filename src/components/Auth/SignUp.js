import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as authActionCreators from '../../store/actions/authActions';

import './SignUp.scss';

// const signUpPic = require ('../../assets/SignUp/SignUp.png');

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            password: '',
            error: false
         }
    }

    handleChange = (e) => {
        console.log(this.state);
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handlesignUp = (e) => {
        // e.preventDefault();
        console.log(this.state);
        this.props.signUp(this.state);
        this.setState({
            error: false,
            authMsg: this.authError
        });
    }

    errorMessage = (authError) => {
        if (authError && this.state.error === false) {
            alert(authError);
            this.setState({
                error: true
            });
        } else {
            return (
                null
            )}
    }
    

    render() { 
        const { auth, authError } = this.props;
        return ( 
            <div className="signUp">
                {/* <img className="signUpPic" src={signUpPic} alt="pflegonaut_signUp" /> */}
                <p className="discoverNewWorlds">Werde Teil der Galaxie</p>
                <form className="signup-form">
                    <div className="input-field">
                        <input
                            className="signUp-name-field" type="text" 
                            id="name" placeholder="Name"
                            onChange={this.handleChange} 
                        required/>

                        <input 
                            className="signUp-email-field" type="email" 
                            id="email" placeholder="Email"
                            onChange={this.handleChange}
                        required/>


                        <input
                            className="signUp-password-field" type="password" 
                            id="password" placeholder="Passwort"
                            onChange={this.handleChange} 
                        required/>

                    </div>
                </form>
                <button 
                    className="signUpBtn"
                    onClick={this.handlesignUp}>Registrien</button>
                <div>
                    <a href="Login" className="linkToLogin"
                >Login</a>
                </div>  

                <div className="error">
                    {this.errorMessage(authError)}
                </div>
            </div>
         );
    }
}
 
// const mapStateToProps = (state) => {
//     return {
//         authError: state.auth.authError,
//         authErrorCode: state.auth.errorCode,
//         auth: state.auth
//     };
//   };
  
// const mapDispatchToProps = (dispatch) => {
//     return {
//         signUp: (newUser) => dispatch(authActionCreators.signUp(newUser))
//     };
// };
  
  
// export default connect(mapStateToProps, mapDispatchToProps) (SignUp);
export default SignUp;