import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import AboutPage from './AboutPage.js';
import HomePage from './HomePage';
import ServicesPage from './ServicesPage';
import SchedulingPage from './SchedulingPage';
import NavBar from './NavBar';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route path="/about"><AboutPage/></Route>
          <Route path="/services"><ServicesPage /></Route>
          <Route path="/scheduling"><SchedulingPage /></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
