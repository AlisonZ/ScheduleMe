import React from 'react';

export default class ServiceListItem extends React.Component {
 
    render(){
        return (
            <div>
                <h3>{this.props.serviceName}</h3>
                <div>{this.props.desc} </div>
                <div>{this.props.cost}</div>
            </div>
        );
    }
}