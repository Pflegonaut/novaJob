import React from 'react';

import './NavigationItem.scss';

import {Link} from 'react-router-dom';

const navigationItem = (props) => {
    return ( 
        <ul className="NavigationItem">
            <li>
                <Link to={props.link}>{props.children}</Link>
            </li>
        </ul>
     );
}
 
export default navigationItem;