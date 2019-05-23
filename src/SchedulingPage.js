import React from 'react';

import NavBar from './NavBar';
import HeaderAndSmText from './HeaderAndSmText';
import googleCalendar from './images/google-calendar.png';

import './styles/SchedulingPage.css';
import './App.css';


export default class SchedulingPage extends React.Component {
    render() {
        const header = 'BOOK AN APPOINTMENT';
        const text = 'Mushrooms co-create prayerformance heartbeat of our ancestors juicy downward dog herbal medicine transformative lavender, harmony biomat. Crystalline astral plane gifting circle Big Sur chia seeds ceremonial-grade, toxins vitamin. Folk remedy positive affirmation light energy, ecofriendly bioneers white sage.';
        return(
            <div>
                <NavBar/>
                <div className="header-sm-text-desc">
                    <HeaderAndSmText header={header} text={text}/>
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