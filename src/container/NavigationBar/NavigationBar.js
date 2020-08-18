import React from 'react';

import './NavigationBar.scss';

import NavigationItems from '../NavigationItems/NavigationItems';


const NavigationBar = (props) => {
    return ( 
        <header className="NavigationBar">
            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>
        </header>
     );
}
 
export default NavigationBar;