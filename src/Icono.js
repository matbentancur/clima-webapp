import React, { Component } from "react";

import clearSkyDay from './images/icons/clear-sky-day.svg'
import clearSkyNight from './images/icons/clear-sky-night.svg'

import fewCloudsDay from './images/icons/few-clouds-day.svg'
import fewCloudsNight from './images/icons/few-clouds-night.svg'

import scatteredCloudsDay from './images/icons/scattered-clouds-day.svg'
import scatteredCloudsNight from './images/icons/scattered-clouds-night.svg'

import brokenCloudsDay from './images/icons/broken-clouds-day.svg'
import brokenCloudsNight from './images/icons/broken-clouds-night.svg'

import showerRainDay from './images/icons/shower-rain-day.svg'
import showerRainNight from './images/icons/shower-rain-night.svg'

import rainDay from './images/icons/rain-day.svg'
import rainNight from './images/icons/rain-night.svg'

import thunderstornDay from './images/icons/thunderstorn-day.svg'
import thunderstornNight from './images/icons/thunderstorn-night.svg'

import snowDay from './images/icons/snow-day.svg'
import snowNight from './images/icons/snow-night.svg'

import mistDay from './images/icons/mist-day.svg'
import mistNight from './images/icons/mist-night.svg'

import defaultIcon from './images/icons/default.svg'

export default class Icono extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icono: "",
        };
      }

    componentDidMount() {
        this.cambiarIcono(this.props.data.icono);
    };

    componentDidUpdate(prevProps) {
        if (this.props.data.icono !== prevProps.data.icono) {
            this.cambiarIcono(this.props.data.icono);
        }
    };

    cambiarIcono(icono) {
        if (icono === '01d'){
            this.setState({icono: clearSkyDay});
        }
        else if(icono === '01n'){
            this.setState({icono: clearSkyNight});
        }
        else if(icono === '02d'){
            this.setState({icono: fewCloudsDay});
        }
        else if(icono === '02n'){
            this.setState({icono: fewCloudsNight});
        }
        else if(icono === '03d'){
            this.setState({icono: scatteredCloudsDay});
        }
        else if(icono === '03n'){
            this.setState({icono: scatteredCloudsNight});
        }
        else if(icono === '04d'){
            this.setState({icono: brokenCloudsDay});
        }
        else if(icono === '04n'){
            this.setState({icono: brokenCloudsNight});
        }
        else if(icono === '09d'){
            this.setState({icono: showerRainDay});
        }
        else if(icono === '09n'){
            this.setState({icono: showerRainNight});
        }
        else if(icono === '10d'){
            this.setState({icono: rainDay});
        }
        else if(icono === '10n'){
            this.setState({icono: rainNight});
        }
        else if(icono === '11d'){
            this.setState({icono: thunderstornDay});
        }
        else if(icono === '11n'){
            this.setState({icono: thunderstornNight});
        }
        else if(icono === '13d'){
            this.setState({icono: snowDay});
        }
        else if(icono === '13n'){
            this.setState({icono: snowNight});
        }
        else if(icono === '50d'){
            this.setState({icono: mistDay});
        }
        else if(icono === '50n'){
            this.setState({icono: mistNight});
        }
        else{
            this.setState({icono: defaultIcon});
        }
    }

    render() {
        return (
            <img src={this.state.icono} alt=""/>
        )
    }
  
}
