import React from 'react';

export default class ImageLink extends React.Component {
    render(){
        return(
            <img src={this.props.src} alt={this.props.src} />
        );
    }
}