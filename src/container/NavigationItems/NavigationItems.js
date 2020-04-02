import React from 'react';

import './NavigationItems.scss';

import NavigationItem from './NavigationItem/NavigationItem';
 

const navigationItems = (props) => {
    
    return ( 
        <ul className="NavigationItems">

            <NavigationItem link="Learning">Learning</NavigationItem> 

            <NavigationItem link="Bibliothek">Library</NavigationItem> 

            <NavigationItem link="Dashboard">Cabin</NavigationItem> 

            <NavigationItem link="Lab">Lab</NavigationItem> 
            
        </ul>
     );
}


export default navigationItems;