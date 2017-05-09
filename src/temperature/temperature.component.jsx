import React, { Component } from 'react';

export class Temperature extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        //Denne implementeres automatisk af PureComponent med shallow compare på props og state
        return this.props !== nextProps;
    }

    render() {
        return (
            <div>
                <label>{ this.props.title }: </label>
                <input value={ this.props.temperature } onChange={(e) => this.props.handleChange(e.target.value)} />
            </div>
        );
    }
}