import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AboutPage from './AboutPage.js';
import HomePage from './HomePage';
import ServicesPage from './ServicesPage';
import SchedulingPage from './SchedulingPage';
import NavBar from './NavBar';


export default class App extends React.Component {
  render() {
    return (
          <Router>
          <NavBar />
          <Switch>
            <Route exact path="/"><HomePage /></Route>
            <Route path="/about"><AboutPage/></Route>
            <Route path="/services"><ServicesPage /></Route>
            <Route path="/scheduling"><SchedulingPage createEvent={this.createEvent}/></Route>
          </Switch>
        </Router>        
    );
  }
}

// export default App;
