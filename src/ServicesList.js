import React from 'react';

import ServiceListItem from './ServiceListItem';
import {servicesOffered} from './servicesOffered.js';

import './App.css';


export default class ServicesList extends React.Component {
    render(){

        const servicesListItem = servicesOffered.map((service, idx) => {
            return (
                <ServiceListItem 
                    key={idx} 
                    serviceName={service.serviceName.toUpperCase()}
                    desc={service.desc}
                    cost={service.cost}
                />
            )
        });
        

        return(
            <ul className="no-list-bullets">
                <li>
                    {servicesListItem}
                </li>
            </ul>
        );
    }
}