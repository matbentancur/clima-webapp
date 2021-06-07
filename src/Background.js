import React, { Component } from "react";

import clearSkyDay from './images/backgrounds/clear-sky-day.jpg'
import clearSkyNight from './images/backgrounds/clear-sky-night.jpg'

import fewCloudsDay from './images/backgrounds/few-clouds-day.jpg'
import fewCloudsNight from './images/backgrounds/few-clouds-night.jpg'

import scatteredCloudsDay from './images/backgrounds/scattered-clouds-day.jpg'
import scatteredCloudsNight from './images/backgrounds/scattered-clouds-night.jpg'

import brokenCloudsDay from './images/backgrounds/broken-clouds-day.jpg'
import brokenCloudsNight from './images/backgrounds/broken-clouds-night.jpg'

import showerRainDay from './images/backgrounds/shower-rain-day.jpg'
import showerRainNight from './images/backgrounds/shower-rain-night.jpg'

import rainDay from './images/backgrounds/rain-day.jpg'
import rainNight from './images/backgrounds/rain-night.jpg'

import thunderstornDay from './images/backgrounds/thunderstorn-day.jpg'
import thunderstornNight from './images/backgrounds/thunderstorn-night.jpg'

import snowDay from './images/backgrounds/snow-day.jpg'
import snowNight from './images/backgrounds/snow-night.jpg'

import mistDay from './images/backgrounds/mist-day.jpg'
import mistNight from './images/backgrounds/mist-night.jpg'

import defaultBackground from './images/backgrounds/default.jpg'

export default class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fondo: "",
        };
      }

    componentDidMount() {
        this.cambiarFondo(this.props.data.icono);
    };

    componentDidUpdate(prevProps) {
        if (this.props.data.icono !== prevProps.data.icono) {
            this.cambiarFondo(this.props.data.icono);
        }
    };

    cambiarFondo(icono) {
        if (icono === '01d'){
            this.setState({fondo: clearSkyDay});
        }
        else if(icono === '01d'){
            this.setState({fondo: clearSkyNight});
        }
        else if(icono === '02d'){
            this.setState({fondo: fewCloudsDay});
        }
        else if(icono === '02n'){
            this.setState({fondo: fewCloudsNight});
        }
        else if(icono === '03d'){
            this.setState({fondo: scatteredCloudsDay});
        }
        else if(icono === '03n'){
            this.setState({fondo: scatteredCloudsNight});
        }
        else if(icono === '04d'){
            this.setState({fondo: brokenCloudsDay});
        }
        else if(icono === '04n'){
            this.setState({fondo: brokenCloudsNight});
        }
        else if(icono === '09d'){
            this.setState({fondo: showerRainDay});
        }
        else if(icono === '09n'){
            this.setState({fondo: showerRainNight});
        }
        else if(icono === '10d'){
            this.setState({fondo: rainDay});
        }
        else if(icono === '10n'){
            this.setState({fondo: rainNight});
        }
        else if(icono === '11d'){
            this.setState({fondo: thunderstornDay});
        }
        else if(icono === '11n'){
            this.setState({fondo: thunderstornNight});
        }
        else if(icono === '13d'){
            this.setState({fondo: snowDay});
        }
        else if(icono === '13n'){
            this.setState({fondo: snowNight});
        }
        else if(icono === '50d'){
            this.setState({fondo: mistDay});
        }
        else if(icono === '50n'){
            this.setState({fondo: mistNight});
        }
        else{
            this.setState({fondo: defaultBackground});
        }
    }

        render() {
        return (
            <div>
                <img className='fondo' src={this.state.fondo} alt=""/>
            </div>
        )
    }
}