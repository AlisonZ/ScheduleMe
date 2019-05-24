import React from 'react';

import ServiceListItem from './ServiceListItem';
import {servicesOffered} from './servicesOffered.js';

import './App.css';
import './styles/ServicesList.css';


export default class ServicesList extends React.Component {
    render(){

        const servicesListItem = servicesOffered.map((service, idx) => {
            return (
                <li>
                    <ServiceListItem 
                        key={idx} 
                        serviceName={service.serviceName.toUpperCase()}
                        desc={service.desc}
                        cost={service.cost}
                    />
                </li>
            )
        });
        

        return(
            <ul className="no-list-bullets services-list">
                {servicesListItem}
            </ul>
        );
    }
}