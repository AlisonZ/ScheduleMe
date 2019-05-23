import React from 'react';

import NavBar from './NavBar';

export default class HomePage extends React.Component {
    render() {
        return(
            <div>
                <NavBar />
                <div>HOME PAGE!!</div>
            </div>
        );
    }
}