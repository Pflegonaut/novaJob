import React from 'react';

import {Route, withRouter, Switch} from 'react-router-dom';


const loggedInComponents = (props) => {
    return ( 
        <Switch>

                {/* <Route exact path="/" component={Dashboard}/> */}
                
        </Switch>
     );
}
 
export default withRouter(loggedInComponents);