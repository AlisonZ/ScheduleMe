import React from 'react';
import {Link} from 'react-router-dom';

import './styles/NavBar.css';

export default class NavBar extends React.Component {
    render() {
        return(
            <div>
                <ul className="navBar-list">
                    <Link to="/" className="navBar-listItem">Home</Link>
                    <Link to="/about" className="navBar-listItem">About</Link>
                    <Link to="/services" className="navBar-listItem">Services</Link>
                    <Link to="/scheduling" className="navBar-listItem">Book Now</Link>
                </ul>

            </div>
        );
    }
}