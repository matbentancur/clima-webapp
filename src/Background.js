import React, { Component } from "react";
import ReactDOM from 'react-dom';

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
        let element = document.getElementById("body");
        let backgroundStyle = "background-default";

        var classList = ReactDOM.findDOMNode(element).classList;
        while (classList.length > 0) {
            classList.remove(classList.item(0));
        }

        ReactDOM.findDOMNode(element).classList.add("d-flex");
        ReactDOM.findDOMNode(element).classList.add("h-100");
        ReactDOM.findDOMNode(element).classList.add("text-center");
        ReactDOM.findDOMNode(element).classList.add("text-white");
        ReactDOM.findDOMNode(element).classList.add("bg-dark");
        ReactDOM.findDOMNode(element).classList.add("background");

        if (icono === '01d'){
            this.setState({fondo: clearSkyDay});
            backgroundStyle = "background-clear-sky-day";
        }
        else if(icono === '01n'){
            this.setState({fondo: clearSkyNight});
            backgroundStyle = "background-clear-sky-night";
        }
        else if(icono === '02d'){
            this.setState({fondo: fewCloudsDay});
            backgroundStyle = "background-few-clouds-day";
        }
        else if(icono === '02n'){
            this.setState({fondo: fewCloudsNight});
            backgroundStyle = "background-few-clouds-night";
        }
        else if(icono === '03d'){
            this.setState({fondo: scatteredCloudsDay});
            backgroundStyle = "background-scattered-clouds-day";
        }
        else if(icono === '03n'){
            this.setState({fondo: scatteredCloudsNight});
            backgroundStyle = "background-scattered-clouds-night";
        }
        else if(icono === '04d'){
            this.setState({fondo: brokenCloudsDay});
            backgroundStyle = "background-broken-clouds-day";
        }
        else if(icono === '04n'){
            this.setState({fondo: brokenCloudsNight});
            backgroundStyle = "background-broken-clouds-night";
        }
        else if(icono === '09d'){
            this.setState({fondo: showerRainDay});
            backgroundStyle = "background-shower-rain-day";
        }
        else if(icono === '09n'){
            this.setState({fondo: showerRainNight});
            backgroundStyle = "background-shower-rain-night";
        }
        else if(icono === '10d'){
            this.setState({fondo: rainDay});
            backgroundStyle = "background-rain-day";
        }
        else if(icono === '10n'){
            this.setState({fondo: rainNight});
            backgroundStyle = "background-rain-night";
        }
        else if(icono === '11d'){
            this.setState({fondo: thunderstornDay});
            backgroundStyle = "background-thunderstorm-day";
        }
        else if(icono === '11n'){
            this.setState({fondo: thunderstornNight});
            backgroundStyle = "background-thunderstorm-night";
        }
        else if(icono === '13d'){
            this.setState({fondo: snowDay});
            backgroundStyle = "background-snow-day";
        }
        else if(icono === '13n'){
            this.setState({fondo: snowNight});
            backgroundStyle = "background-snow-night";
        }
        else if(icono === '50d'){
            this.setState({fondo: mistDay});
            backgroundStyle = "background-mist-day";
        }
        else if(icono === '50n'){
            this.setState({fondo: mistNight});
            backgroundStyle = "background-mist-night";
        }
        else{
            this.setState({fondo: defaultBackground});
            backgroundStyle = "background-default";
        }

        ReactDOM.findDOMNode(element).classList.add(backgroundStyle);
        
    }

        render() {
        return (
            <div></div>
        )
    }
}
