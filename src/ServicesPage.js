import React from 'react';

import NavBar from './NavBar';
import HeaderAndSmText from './HeaderAndSmText';
import ServicesList from './ServicesList';
import './App.css';

export default class ServicesPage extends React.Component {
    render() {
        const header = 'SERVICES OFFERED';
        const text = 'Peacock feather kelp prius, master lavender crystalline cold plunge world soul. Reflexology conflict resolution human potential be the change blessed rolfing, holistic mercury retrograde occupy gut flora optimal frequency. What the planet really needs forest jasmine, synchronicity honoring your truth. Farm to table chi energy apple cider vinegar fasting rainbow incense planetary transition, positive affirmation djembe fire tending. Namaste.';
        return(
            <div>
                <NavBar />
                <div className="header-sm-text-desc">
                    <HeaderAndSmText header={header} text={text} />
                </div>
                <ServicesList />
            </div>
        );
    }
}