/* global gapi */
import React from 'react';
import {Helmet} from 'react-helmet';

import HeaderAndSmText from './HeaderAndSmText';
import googleCalendar from './images/google-calendar.png';
import GoogleSignIn from './GoogleSignIn';
import { CALENDAR_ID, GOOGLE_API_KEY } from "./config.js";

import './styles/SchedulingPage.css';
import './App.css';


export default class SchedulingPage extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
        resource: {
            "summary": "Appointment",
            "location": "Somewhere",
            "start": {
              "dateTime": "2019-06-16T10:00:00.000-07:00"
            },
            "end": {
              "dateTime": "2019-06-16T10:25:00.000-07:00"
            }
          },
       }

       this.getEvents = this.getEvents.bind(this);
   }

    getEvents(){
        let that = this;
        function start() {
          gapi.client.init({
            'apiKey': GOOGLE_API_KEY
          }).then(function() {
            return gapi.client.request({
              'path': `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
            })
          }).then( (response) => {
            let events = response.result.items
            that.setState({
              events
            }, ()=>{
              console.log(that.state.events);
            })
          }, function(reason) {
            console.log(reason);
          });
        }
        gapi.load('client', start)
      }

      insertEvents(){
        let that = this;
        function start() {
          gapi.client.init({
            'apiKey': GOOGLE_API_KEY
          }).then(function() {
            return gapi.client.calendar.events.insert({
                'calendarId': 'primary',
                'resource': {
                    "summary": "Appointment",
                    "location": "Somewhere",
                    "start": {
                      "dateTime": "2019-06-16T10:00:00.000-07:00"
                    },
                    "end": {
                      "dateTime": "2019-06-16T10:25:00.000-07:00"
                    }
                  }
              })
          }).then( (response) => {  
            response.execute(function(resp) {
                console.log(resp);
              })
            // let events = response.result.items
            // that.setState({
            //   events
            // }, ()=>{
            //   console.log(that.state.events);
            // })
          }, function(reason) {
            console.log(reason);
          });
        }
        gapi.load('client', start)
      }



    render() {
        // const {user} = this.state;
        const header = 'BOOK AN APPOINTMENT';
        const text = 'Mushrooms co-create prayerformance heartbeat of our ancestors juicy downward dog herbal medicine transformative lavender, harmony biomat. Crystalline astral plane gifting circle Big Sur chia seeds ceremonial-grade, toxins vitamin. Folk remedy positive affirmation light energy, ecofriendly bioneers white sage.';
        function handleButtonClick() {
            console.log('button clicked');
        };



        return (
            <div>
                <Helmet>    
                    <script src="https://apis.google.com/js/platform.js" async defer></script>
                </Helmet>
                <GoogleSignIn />
                <button onClick={this.insertEvents}>hiiiiiiiiiiiii</button>
                <div className="header-sm-text-desc">
                    <HeaderAndSmText header={header} text={text} />
                    <center>
                        <img
                            src={googleCalendar}
                            alt="google-calendar-image"
                            className="schedulingPage-image"
                        />
                    </center>
                </div>
            </div>
        );
    }
}