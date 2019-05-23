import React from 'react';

export default class ImageLink extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <img src={this.props.src} alt={this.props.src} />
        );
    }
}