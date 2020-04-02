import React from 'react';

import {Route, withRouter, Switch, Redirect} from 'react-router-dom';

import SignUp from '../../Auth/SignUp';
import Login from '../../Auth/Login';


const loggedOutComponents = (props) => {
    return ( 
        <Switch>

                <Route exact path="/Login" component={Login}/>

                <Route exact path="/SignUp" component={SignUp}/>

                <Redirect to="/Login" />

                
        </Switch>
     );
}
 
export default withRouter(loggedOutComponents);