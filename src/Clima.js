import React, { Component } from "react";
import Icono from './Icono';
import Background from './Background';

export default class Clima extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ciudad: this.props.data.ciudad,
            pais: this.props.data.pais,
            clima: '', 
            temperatura: 0,
            icono: '',
            sensacionTermica: 0,
            minima: 0,
            maxima: 0,
            presion: 0,
            humedad: 0,
            visibilidad: 0,
            viento: 0,  
            nubosidad: 0,  
            mensajeDeError: false
        };
      }

    componentDidMount() {
        this.obtenerClima(this.props.data.ciudad);
    };

    componentDidUpdate(prevProps) {
        if (this.props.data.ciudad !== prevProps.data.ciudad) {
            this.obtenerClima(this.props.data.latitud, this.props.data.longitud);
        }
    };

    obtenerClima(latitud, longitud) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&lang=es&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}&units=metric`
        fetch(url)
        .then((result) => result.json())
        .then((result) => {
            this.setState({
                ciudad: this.props.data.ciudad,
                pais: this.props.data.pais,
                clima: result.weather[0].description,
                temperatura: result.main.temp,
                icono: result.weather[0].icon,
                sensacionTermica: result.main.feels_like,
                minima: result.main.temp_min,
                maxima: result.main.temp_max,
                presion: result.main.pressure,
                humedad: result.main.humidity,
                visibilidad: result.visibility,
                viento: result.wind.speed,
                nubosidad: result.clouds.all,
                mensajeDeError: false
            }); 
        })
        .catch(error => {
            this.setState({mensajeDeError: true}); 
            console.error(error)
        });
    }

    render() {
        return (      
        <div class="tarjeta">
            <div class="tarjeta-clima">
                <Background data={this.state}/>
                <div class="row row-cols-1">
                    <div class="col title">
                        <p class="fs-1">Clima</p>
                    </div>
                    <div class="col city">
                        <p class="fs-2">{this.state.ciudad}, {this.state.pais}</p>
                    </div>
                </div>
                <div class="col temperature">
                        <p class="fs-1 badge bg-secondary text-wrap">{this.state.temperatura} °C</p>
                </div>
                <div class="col icon">
                    <Icono data={this.state}/>
                </div>
                <div class="col description">
                    <p class="fs-1">{this.state.clima}</p>
                </div>
                <div class="row row-cols-4">
                    <div class="col extra-value">
                        <p class="text-start">Máxima: {this.state.maxima} °C</p>
                    </div>
                    <div class="col extra-value">
                        <p class="text-start "> Mínima: {this.state.minima} °C</p>
                    </div>
                    <div class="col extra-value">
                        <p class="text-start">Sensación: {this.state.sensacionTermica}°C</p>
                    </div>
                    <div class="col extra-value">
                        <p class="text-start">Presión: {this.state.presion} hPa</p>
                    </div>
                    <div class="col extra-value">
                        <p class="text-start">Humedad: {this.state.humedad} %</p>
                    </div>
                    <div class="col extra-value">
                        <p class="text-start">Nubosidad: {this.state.nubosidad} %</p>
                    </div>
                    <div class="col extra-value">
                        <p class="text-start">Viento: {this.state.viento} m/s</p>
                    </div>
                    <div class="col extra-value">
                        <p class="text-start">Visibilidad: {this.state.visibilidad} m</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
  
}
