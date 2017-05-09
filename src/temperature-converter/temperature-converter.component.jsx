import React, { PureComponent } from 'react';

import { fahrenheitToCelcius, celciusToFahrenheit } from '../shared/converters';
import { Temperature } from '../temperature/temperature.component';

export class TemperatureConverter extends PureComponent {
    constructor(props) {
        super(props);

        this.setTemperature = this.setTemperature.bind(this);
        this.state = { temperature: 0 }
    }

    setTemperature(converter) {
        return temperature => {
            converter = converter ? converter : t => t;
            this.setState({ temperature: converter(temperature) });
        };
    }

    render() {
        return (
            <div>
                <h1>Temperature converter!</h1>
                <Temperature title="Fahrenheit" 
                             temperature={ celciusToFahrenheit(this.state.temperature) } 
                             handleChange={ this.setTemperature(fahrenheitToCelcius) } />
                             
                <Temperature title="Celcius" 
                             { ...this.state }
                             handleChange={ this.setTemperature() } />
            </div>
        );
    }
}