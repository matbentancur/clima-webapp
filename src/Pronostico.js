import React, { Component } from "react";

export default class Pronostico extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitud: this.props.data.latitud,
            longitud: this.props.data.longitud,
            clima: '', 
            temperatura: 0,
            icono: '',
            minima: 0,
            maxima: 0,
            humedad: 0,
            viento: 0,  
            mensajeDeError: false
        };
      }

    componentDidMount() {
        this.obtenerPronostico(this.props.data.ciudad);
    };

    componentDidUpdate(prevProps) {
        if (this.props.data.ciudad !== prevProps.data.ciudad) {
            this.obtenerPronostico(this.props.data.ciudad);
        }
    };

    obtenerPronostico(ciudad) {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitud}&lon=${longitud}&exclude=current,minutely,hourly,alerts&lang=es&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}&units=metric`
        fetch(url)
        .then((result) => result.json())
        .then((result) => {
            this.setState({
                latitud: this.props.data.latitud,
                longitud: this.props.data.longitud,
                clima: result.weather[0].description,
                temperatura: result.main.temp,
                icono: result.weather[0].icon,
                minima: result.main.temp_min,
                maxima: result.main.temp_max,
                humedad: result.main.humidity,
                viento: result.wind.speed,
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
        
        <div class="tarjeta">
            <div class="tarjeta-pronostico">
                <Background data={this.state}/>
                <div class="row row-cols-1">
                    <div class="col city">
                        <p class="fs-2 text-decoration-underline">{this.state.ciudad}</p>
                    </div>
                    <div class="col country">
                        <p class="fs-4">{this.state.pais}</p>
                    </div>
                </div>
                <div class="col temperature">
                        <p class="fs-1 badge bg-secondary text-wrap">{this.state.temperatura}°C</p>
                </div>
                <div class="col icon">
                    <Icono data={this.state}/>
                </div>
                <div class="col description">
                    <p class="fs-1">{this.state.clima}</p>
                </div>
                <div class="row row-cols-2">
                    <div class="col extra-value">
                        <p class="text-start">Máxima: {this.state.maxima}°C</p>
                    </div>
                    <div class="col extra-value">
                        <p class="text-start "> Mínima: {this.state.minima}°C</p>
                    </div>
                    <div class="col extra-value">
                        <p class="text-start">Sensación Térmica: {this.state.sensacionTermica}°C</p>
                    </div>
                    <div class="col extra-value">
                        <p class="text-start">Presión: {this.state.presion} hPa</p>
                    </div>
                    <div class="col extra-value">
                        <p class="text-start">Humedad: {this.state.humedad}%</p>
                    </div>
                    <div class="col extra-value">
                        <p class="text-start">Nubosidad: {this.state.nubosidad}%</p>
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
