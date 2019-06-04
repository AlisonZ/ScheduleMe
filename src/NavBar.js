import React from 'react';
import {Link} from 'react-router-dom';
import firebase from 'firebase';

import './styles/NavBar.css';

export default class NavBar extends React.Component {
    state = {
        user: null
    }

    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => this.setState({user})
        );
    }

    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    signOut = () => {
        firebase.auth().signOut().then(() => {
            this.props.history.push('/');
        });
    }


    render() {

        const {user} = this.state;

        const userDisplayName = user ? (
            <strong>
                {user.displayName || user.phoneNumber}
            </strong>
        ) : null;
        // const signOut = user ? <button onClick={this.signOut}>Sign Out</button>;

        return(
            <div>
                {userDisplayName}

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