/* global gapi */
import React from 'react';
import {Helmet} from 'react-helmet';
import Dropdown from 'react-dropdown';

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
        selected: '',
        signedIn: false,
        resource: {
            "summary": "Appointment!!!!!!????",
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
       this._onSelect = this._onSelect.bind(this);
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

      insertEvents(resource){
        let that = this;
        function start() {
          gapi.client.init({
            'apiKey': GOOGLE_API_KEY
          }).then(function() {
            return gapi.client.calendar.events.insert({
                'calendarId': 'primary',
                'resource': resource
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

      updateSignInStatus() {
        this.setState({signedIn: !this.state.signedIn});
    }

    _onSelect (option) {
        console.log('You selected ', option.label)
        this.setState({selected: option})
      }




    render() {
        // console.log('statttt', this.state);

        const defaultOption = this.state.selected
        const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label

        const header = 'BOOK AN APPOINTMENT';
        const text = 'Mushrooms co-create prayerformance heartbeat of our ancestors juicy downward dog herbal medicine transformative lavender, harmony biomat. Crystalline astral plane gifting circle Big Sur chia seeds ceremonial-grade, toxins vitamin. Folk remedy positive affirmation light energy, ecofriendly bioneers white sage.';


          // TODO: These times should be returned from an API call based on the day selected
        // until that functionality is available, these times are hard-coded
        const options = [
            {value: '9-10am', label:'9am - 10am'},
            {value: '10-11am', label:'10am - 11am'},
            {value: '11-12pm', label:'11am - 12pm'},
            {value: '12-1pm', label:'12pm - 1pm'},
            {value: '1-2pm', label:'1pm - 2pm'},
            {value: '2-3pm', label:'2pm - 3pm'},
            {value: '3-4pm', label:'3pm - 4pm'},
            {value: '4-5pm', label:'4pm - 5pm'},
        ];



        return (
            <div>
                <Helmet>    
                    <script src="https://apis.google.com/js/platform.js" async defer></script>
                </Helmet>
                <GoogleSignIn updateSignInStatus={this.updateSignInStatus.bind(this)}/>
                {this.state.signedIn ?
                    <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" /> :
                    null
                }
                <button onClick={this.insertEvents(this.state.resource)}>hiiiiiiiiiiiii</button>
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