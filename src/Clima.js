import React, { Component } from "react";

export default class Clima extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            this.obtenerClima(this.props.data.ciudad);
        }
    };

    obtenerClima(ciudad) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}&units=metric`
        fetch(url)
        .then((result) => result.json())
        .then((result) => {
            this.setState({
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
        // <p>Ciudad: {this.props.data.ciudad}</p>
        // {this.state.mensajeDeError || this.props.data.mensajeDeError ? <p>Ocurrió un error, no se pudo obtener el clima</p> : 
        // <p>Clima: {this.state.clima}</p>}
        // <p>Temperatura: {this.state.temperatura}°C</p>
        <div className="Clima">
            <div class="col temperature">
                    <p class="fs-1">{this.state.temperatura}°C</p>
            </div>
            <div class="col icon">
                <img src="./images/cloudy.svg" alt=""/>
            </div>
            <div class="col description">
                <p class="fs-1">{this.state.clima}</p>
            </div>
            <div class="row row-cols-2">
                <div class="col extra-value">
                    <p class="fs-4">Máxima: {this.state.maxima}°C</p>
                </div>
                <div class="col extra-value">
                    <p class="fs-4">Mínima: {this.state.minima}°C</p>
                </div>
                <div class="col extra-value">
                    <p class="fs-4">Sensación Térmica: {this.state.sensacionTermica}°C</p>
                </div>
                <div class="col extra-value">
                    <p class="fs-4">Presión: {this.state.presion} hPa</p>
                </div>
                <div class="col extra-value">
                    <p class="fs-4">Humedad: {this.state.humedad}%</p>
                </div>
                <div class="col extra-value">
                    <p class="fs-4">Nubosidad: {this.state.nubosidad}%</p>
                </div>
                <div class="col extra-value">
                    <p class="fs-4">Viento: {this.state.viento} m/s</p>
                </div>
                <div class="col extra-value">
                    <p class="fs-4">Visibilidad: {this.state.visibilidad}</p>
                </div>
            </div>
        </div>
        )
    }
  
}
