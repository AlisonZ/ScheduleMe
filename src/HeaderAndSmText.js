import React from 'react';

import './styles/HeaderAndSmText.css';

export default class HeaderAndSmText extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log('small guyyyy', this.props)
        return(
            <div>
                <h1 className="headerSmText-title">{this.props.header}</h1>
                <div>{this.props.text}</div>
            </div>
        );
    }
}