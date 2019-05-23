import React from 'react';

import './styles/NavBar.css';

export default class NavBar extends React.Component {
    render() {
        return(
            <div>
                <ul className="navBar-list">
                    <li className="navBar-listItem">Home</li>
                    <li className="navBar-listItem">About</li>
                    <li className="navBar-listItem">Services</li>
                    <li className="navBar-listItem">Book Now</li>
                </ul>

            </div>
        );
    }
}