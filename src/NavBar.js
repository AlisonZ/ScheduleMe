import React from 'react';
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import  {auth, provider}from './setupFirebase.js'

import './styles/NavBar.css';

export default class NavBar extends React.Component {
    constructor() {
        super();
        // this.logout = this.logout.bind(this);
        this.login = this.login.bind(this);
    }
    state = {
        user: null
    }

    // logout() {

    // }

    login() {
        auth.signInWithPopup(provider)
        .then((result) => {
            console.log('auth after resulllllll')
            const user = result.user;
            this.setState({user}); 
        });
    }

    // componentDidMount() {
    //     this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
    //         (user) => this.setState({user})
    //     );
    // }

    // componentWillUnmount() {
    //     this.unregisterAuthObserver();
    // }

    // signOut = () => {
    //     firebase.auth().signOut().then(() => {
    //         console.log('signed out');
    //         // this.props.history.push('/about');
    //     });
    // }


    render() {
        const {user} = this.state;
        console.log('userrrrr', user);

        // const userDisplayName = user ? (
        //     <strong>
        //         {user.displayName}
        //     </strong>
        // ) : null;
        
        // const signOut = user ? <button onClick={this.signOut}>Sign Out</button> : null;

        return(
            <div>
                {this.state.user ? 
                    <button>Logout</button> :
                    <button onClick={this.login}>Login</button>

                } 
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