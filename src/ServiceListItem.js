import React from 'react';

import './App.css';
import './styles/ServicesList.css';


export default class ServiceListItem extends React.Component {
 
    render(){
        return (
            <div className="services-list-item">
                <h3>{this.props.serviceName}</h3>
                <div>{this.props.desc} </div>
                <div>{this.props.cost}</div>
            </div>
        );
    }
}