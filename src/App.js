import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApiCalendar from 'react-google-calendar-api';  

import AboutPage from './AboutPage.js';
import HomePage from './HomePage';
import ServicesPage from './ServicesPage';
import SchedulingPage from './SchedulingPage';
import NavBar from './NavBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.createEvent = this.createEvent.bind(this);
  }

  handleItemClick(event, name) {
    if (name === 'sign-in') {
      ApiCalendar.handleAuthClick();
      console.log('signedinnnn');
    } else if (name === 'sign-out') {
      ApiCalendar.handleSignoutClick();
    }
  }

  createEvent() {
    console.log('create callback!!!!!');
    // console.log('in the create event');
    // const eventFromNow = {
    //   summary: "Poc Dev From Now",
    //   time: 480,
    // };

    // ApiCalendar.createEventFromNow(eventFromNow)
    // .then((result) => {
    //   console.log(result);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }

  render() {
    return (
      <div>
         <div>
          <button
                onClick={(e) => this.handleItemClick(e, 'sign-in')}
                >
              sign-in
            </button>
            <button
                onClick={(e) => this.handleItemClick(e, 'sign-out')}
                >
              sign-out
            </button>
            {/* <button onClick={this.createEvent}>
              Create Event
            </button> */}
        </div>

          <Router>
          <NavBar />
          <Switch>
            <Route exact path="/"><HomePage /></Route>
            <Route path="/about"><AboutPage/></Route>
            <Route path="/services"><ServicesPage /></Route>
            <Route path="/scheduling"><SchedulingPage createEvent={this.createEvent} /></Route>
          </Switch>
        </Router>
        
      </div>
    );
  }
}

// export default App;
