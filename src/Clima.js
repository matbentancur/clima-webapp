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
        const error = this.state.mensajeDeError;
        const propsError = this.props.data.mensajeDeError;
        if (error || propsError) {
            return (
                <div className="Clima">
                    <p>Ocurrió un error, no se pudo obtener el clima</p>;
              </div>
            );
        } else {
            return (
                <div className="Clima">
                    <p>Ciudad: {this.props.data.ciudad}</p>
                    <p>Clima: {this.state.clima}</p>
                    <p>Temperatura: {this.state.temperatura}°C</p>
            </div>
            );
      }
    }
  
}