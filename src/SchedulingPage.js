/* global gapi */
import React from 'react';
import ApiCalendar from 'react-google-calendar-api';

import HeaderAndSmText from './HeaderAndSmText';
import googleCalendar from './images/google-calendar.png';

import './styles/SchedulingPage.css';
import './App.css';
import { generateKeyPair } from 'crypto';


export default class SchedulingPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.createEvent = this.createEvent.bind(this);
    }

    // handleItemClick(event, name) {
    //     if (name === 'sign-in') {
    //         ApiCalendar.handleAuthClick();
    //     } else if (name === 'sign-out') {
    //         ApiCalendar.handleSignoutClick();
    //     }
    // }

    // createEvent() {
    //     console.log('in the create event');
    //     const eventFromNow = {
    //         summary: "Poc Dev From Now",
    //         time: 480,
    //     };

    //     ApiCalendar.createEventFromNow(eventFromNow)
    //         .then((result) => {
    //             console.log(result);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    componentDidMount() {
        let self = this;
        let scriptTag = document.createElement('script');
        scriptTag.type = 'text/javascript';
        scriptTag.src = 'https://apis.google.com/js/api.js';

        scriptTag.addEventListener('load', function (e) {
            gapi.load('client', () => {
                console.log('in the load section!!!!');
                gapi.client.init({
                    'apiKey': 'AIzaSyDPi0QcVPngFZqWWhfYAhWlnaVSjp1P4tw',
                    'clientId': '663045271040-gn137de7e90hrmmj10atf5afhrhfi59u.apps.googleusercontent.com',
                    'scope': 'https://www.googleapis.com/auth/calendar',
                }).then(function () {
                    // 3. Initialize and make the API request.
                    return gapi.client.request({
                        'path': 'https://www.googleapis.com/calendar/v3/calendars/alisonkzerbe@gmail.com/',
                    })
                }).then(function (response) {
                    console.log(response.result);
                }, function (reason) {
                    console.log('Error: ' + reason.result.error.message);
                });

            });
        });

        document.head.appendChild(scriptTag);

    }

    render() {
        const header = 'BOOK AN APPOINTMENT';
        const text = 'Mushrooms co-create prayerformance heartbeat of our ancestors juicy downward dog herbal medicine transformative lavender, harmony biomat. Crystalline astral plane gifting circle Big Sur chia seeds ceremonial-grade, toxins vitamin. Folk remedy positive affirmation light energy, ecofriendly bioneers white sage.';
        return (
            <div>
                <div>
                    <button onClick={this.props.createEvent}>
                        Create Event
                    </button>
                </div>

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