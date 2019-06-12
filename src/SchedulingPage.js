/* global gapi */
import React from 'react';
import {Helmet} from 'react-helmet';
import Dropdown from 'react-dropdown';
import moment from 'moment-timezone';

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
        selected: null,
        selectedTreatment: '',
        signedIn: false,
        startTime: "",
        endTime: "",
        eventTitle: "",
        value: "",
       }

       this.getEvents = this.getEvents.bind(this);
       this._onSelect = this._onSelect.bind(this);
       this._onSelectTreatments = this._onSelectTreatments.bind(this);
       this.convertInputTime = this.convertInputTime.bind(this);
       this.insertEvents = this.insertEvents.bind(this);
       this.handleInputChange = this.handleInputChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
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
            //   console.log(that.state.events);
            })
          }, function(reason) {
            // console.log(reason);
          });
        }
        gapi.load('client', start)
      }

    insertEvents(state){
    console.log('insert events state', state);
        let that = this;
        function start() {
          gapi.client.init({
            'apiKey': GOOGLE_API_KEY
          }).then(function() {
            return gapi.client.calendar.events.insert({
                'calendarId': 'alisonkzerbe@gmail.com',
                'resource': {
                    "summary": state.selectedTreatment.value,
                    "location": "Somewhere",
                    "start": {
                      "dateTime": state.startTime,
                      "timeZone": "America/Los_Angeles",
                    },
                    "end": {
                      "dateTime": state.endTime,
                      timeZone: "America/Los_Angeles",
                    }
                  }
              })
          }).then( (response) => {  
            response.execute(function(resp) {
                console.log(resp);
              })
          }, function(reason) {
            console.log(reason);
          });
        }
        gapi.load('client', start)
      }

      updateSignInStatus() {
        this.setState({signedIn: !this.state.signedIn});
    }

    convertInputTime() {    
        //TODO: get working with a library like moment instead of this hard-coding here
        //TODO: pull this into a helper method in a /common file
        const timeMaps = {
            "9am" : "T09:00:00.000-07:00",
            "10am": "T10:00:00.000-07:00",
            "11am": "T11:00:00.000-07:00",
            "12pm": "T12:00:00.000-07:00",
            "1pm": "T13:00:00.000-07:00",
            "2pm": "T14:00:00.000-07:00",
            "3pm": "T15:00:00.000-07:00",
            "4pm": "T16:00:00.000-07:00",
            "5pm": "T17:00:00.000-07:00",
        }

        const selectedTimes = this.state.selected.label.split(" ");
        const startHour = timeMaps[selectedTimes[0]];
        const endHour = timeMaps[selectedTimes[2]];
        const startingTime = moment.tz(`2019-06-19${startHour}`, "America/Los_Angeles");
        const endingTime = moment.tz(`2019-06-19${endHour}`, "America/Los_Angeles");
    
        this.setState({
            startTime: startingTime._i,
            endTime: endingTime._i,
        }); 
    }


    _onSelect (option) {
        console.log('You selected ', option.label)
        this.setState({selected: option})    
        this.convertInputTime(); 
      }

      _onSelectTreatments (treatment) {
        console.log('You selected ', treatment.label)
        this.setState({selectedTreatment: treatment}) 
      }

      handleInputChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    render() {
        const defaultTimeOption = this.state.selected;
        const defaultTreatmentOption = this.state.selectedTreatment;
    
        // const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label

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

        const treatments = [
            {value: 'Massage', label:'Massage'},
            {value: 'Acupuncture', label:'Acupuncture'},
            {value: 'Healing Gems', label:'Healing Gems'},
            {value: 'Tarot Reading', label:'Tarot Reading'},
            {value: 'Ouija', label:'Ouija'},
        ];

        return (
            <div>
                <Helmet>    
                    <script src="https://apis.google.com/js/platform.js" async defer></script>
                </Helmet>
                <GoogleSignIn updateSignInStatus={this.updateSignInStatus.bind(this)}/>
                {this.state.signedIn ? (
                    <div>
                        <Dropdown options={treatments} onChange={this._onSelectTreatments} value={defaultTreatmentOption} placeholder="Select a treatment" />                       
                        <Dropdown options={options} onChange={this._onSelect} value={defaultTimeOption} placeholder="Select an time" />
                    </div>
                ) : null
                }
                <button onClick={() => this.insertEvents(this.state)} disabled={!this.state.selected}>Book a slot today</button>

                <div className="header-sm-text-desc">
                    <HeaderAndSmText header={header} text={text} />
                    <center>
                        <img
                            src={googleCalendar}s
                            alt="google-calendar-image"
                            className="schedulingPage-image"
                        />  
                    </center>
                </div>
            </div>
        );
    }
}