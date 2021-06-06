import React, { Component } from "react";

export default class Clima extends Component {
    constructor(props) {
        super(props);
        this.state = {clima: '', temperatura: 0,  mensajeDeError: false};
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
        </div>
        )
    }
  
}
