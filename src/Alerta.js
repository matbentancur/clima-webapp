import React, { Component } from "react";

import alertIcon from './images/icons/alert.svg'

var dateFormat = require("dateformat");

dateFormat.i18n = {
    dayNames: [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Domingo",
      "Lunes",
      "Martes",
      "Miárcoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ],
    monthNames: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembe",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"],
  };

export default class Alerta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitud: this.props.data.latitud,
            longitud: this.props.data.longitud,
            mensajeDeError: false
        };
      }

    componentDidMount() {
        this.obtenerAlerta(this.props.data.latitud, this.props.data.longitud);
    };

    componentDidUpdate(prevProps) {
        if (this.props.data.latitud !== prevProps.data.latitud || this.props.data.longitud !== prevProps.data.longitud) {
            this.obtenerAlerta(this.props.data.latitud, this.props.data.longitud);
        }
    };

    obtenerAlerta(latitud, longitud) {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitud}&lon=${longitud}&exclude=current,minutely,hourly,daily&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`
        fetch(url)
        .then((result) => result.json())
        .then((result) => {
            this.setState({
                latitud: this.props.data.latitud,
                longitud: this.props.data.longitud,

                emisor: result.alerts[0].sender_name,
                evento: result.alerts[0].event,
                comienza: dateFormat(new Date(result.alerts[0].start * 1000), "dd mmmm yyyy HH:mm"),
                finaliza: dateFormat(new Date(result.alerts[0].end * 1000), "dd mmmm yyyy HH:mm"),
                descripcion: result.alerts[0].description,

                mensajeDeError: false
            }); 
        })
        .catch(error => {
            this.setState({
                latitud: this.props.data.latitud,
                longitud: this.props.data.longitud,

                emisor: "",
                evento: "",
                comienza: 0,
                finaliza: 0,
                descripcion: "No hay alertas",
                mensajeDeError: true
            }); 
            console.error(error)
        });
    }

    render() {
        return (
        <div class="tarjeta">
            <div class="tarjeta-alerta">
                <div class="row row-cols-1">

                    <div class="col title">
                        <p class="fs-1">Alertas</p>
                    </div>

                    <div class="col icono">
                        <img src={alertIcon} alt=""/>
                    </div>

                    <div class="col">
                        <div class="row row-cols-2">
                            <div class="col emisor">
                                <p>Emisor: {this.state.emisor}</p>
                            </div>
                            <div class="col evento">
                                <p>Evento: {this.state.evento}</p>
                            </div>
                            <div class="col comienza">
                                <p>Comienza: {this.state.comienza}</p>
                            </div>
                            <div class="col finaliza">
                                <p>Finaliza: {this.state.finaliza}</p>
                            </div>
                        </div>
                        <div class="row row-cols-1">
                            <div class="col descripcion">
                                <p>{this.state.descripcion}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
  
}
