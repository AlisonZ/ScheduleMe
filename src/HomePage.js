import React from 'react';

import NavBar from './NavBar';
import ImageLink from './ImageLink';
import HeaderAndSmText from './HeaderAndSmText';
import './styles/HomePage.css';
import './App.css';

import acupuncture from './images/acupuncture.jpg';
import booking from './images/scheduling-calendar.jpg';
import aboutMe from './images/about-me-sparkler.jpg';
import services from './images/services-oil.jpg';

export default class HomePage extends React.Component {
    render() {
        const header = 'COMMUNITY STICK AND POKE';
        const text = 'Tincture grass-fed full moon infinite blessings, vitamix tofurkey. Authentic self earth surrender yoni daily kegel practice, impermanent mushrooms. Vinyasa Braggs biodiesel, coconut water kefir. Workshop loving kindness ecstatic dance papasan embodied prius alkaline talking stick, open-minded sunset. Nectar as we honor enlightenment, solstice feline acupuncture popcorn with brewers yeast om raw cacao marijuana perineum discovering valuable truths. Namaste.';
        return(
            <div>
                <NavBar />
                <img src={acupuncture} alt="acupuncture" className="homePage-mainImage" />
                <div className="header-sm-text-desc">
                    <HeaderAndSmText header={header} text={text} />
                </div>
                <ul className="homePage-imageList">
                    <li className="homePage-imageItem">
                        <ImageLink src={aboutMe}/>
                        <div className="homePage-imageItem-title">About Me</div>
                    </li>
                    <li className="homePage-imageItem">
                        <ImageLink src={services} />
                        <div className="homePage-imageItem-title">Services</div>
                    </li>
                    <li className="homePage-imageItem">
                        <ImageLink src={booking}/>
                        <div className="homePage-imageItem-title">Book Now</div>
                    </li>
                </ul>
            </div>
        );
    }
}