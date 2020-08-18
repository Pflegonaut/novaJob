import React, { Component } from 'react';

import { withRouter, Redirect } from 'react-router-dom';

import Aux from '../../hoc/Aux';

import './Layout.scss';

import NavigationBar from '../../container/NavigationBar/NavigationBar';

import LoggedInComponents from './LoggedInComponents/LoggedInComponents';
import LoggedOutComponents from './LoggedOutComponents/LoggedOutComponents';



class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showSideDrawer: true
         }
    }
   
    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        });
        console.log("sideDrawerClosedHandler");
    }

    sideDrawerToggleHandler = () => {
        console.log("sideDrawerToggleHandler");
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() { 
        return(
            <LoggedOutComponents />
        )
    }
}



export default Layout;
