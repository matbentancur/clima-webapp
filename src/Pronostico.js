import React, { Component } from "react";
import Icono from './Icono';

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

export default class Pronostico extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitud: this.props.data.latitud,
            longitud: this.props.data.longitud,
            diaUnoDateTime: 0,
            diaDosDateTime: 0,
            diaTresDateTime: 0,
            diaCuatroDateTime: 0,
            diaCincoDateTime: 0,
            icono: "",
            mensajeDeError: false
        };
      }

    componentDidMount() {
        this.obtenerPronostico(this.props.data.latitud, this.props.data.longitud);
    };

    componentDidUpdate(prevProps) {
        if (this.props.data.latitud !== prevProps.data.latitud || this.props.data.longitud !== prevProps.data.longitud) {
            this.obtenerPronostico(this.props.data.latitud, this.props.data.longitud);
        }
    };

    obtenerPronostico(latitud, longitud) {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitud}&lon=${longitud}&exclude=current,minutely,hourly,alerts&lang=es&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}&units=metric`
        fetch(url)
        .then((result) => result.json())
        .then((result) => {
            this.setState({
                latitud: this.props.data.latitud,
                longitud: this.props.data.longitud,

                diaUnoDateTime: dateFormat(new Date(result.daily[1].dt * 1000), "dd mmmm yyyy"),
                diaUnoIcono: result.daily[1].weather[0].icon,
                diaUnoClima: result.daily[1].weather[0].description,
                diaUnoMax: result.daily[1].temp.max,
                diaUnoMin: result.daily[1].temp.min,
                diaUnoHumedad: result.daily[1].humidity,
                diaUnoViento: result.daily[1].wind_speed,

                diaDosDateTime: dateFormat(new Date(result.daily[2].dt * 1000), "dd mmmm yyyy"),
                diaDosIcono: result.daily[2].weather[0].icon,
                diaDosClima: result.daily[2].weather[0].description,
                diaDosMax: result.daily[2].temp.max,
                diaDosMin: result.daily[2].temp.min,
                diaDosHumedad: result.daily[2].humidity,
                diaDosViento: result.daily[2].wind_speed,

                diaTresDateTime: dateFormat(new Date(result.daily[3].dt * 1000), "dd mmmm yyyy"),
                diaTresIcono: result.daily[3].weather[0].icon,
                diaTresClima: result.daily[3].weather[0].description,
                diaTresMax: result.daily[3].temp.max,
                diaTresMin: result.daily[3].temp.min,
                diaTresHumedad: result.daily[3].humidity,
                diaTresViento: result.daily[3].wind_speed,

                diaCuatroDateTime: dateFormat(new Date(result.daily[4].dt * 1000), "dd mmmm yyyy"),
                diaCuatroIcono: result.daily[4].weather[0].icon,
                diaCuatroClima: result.daily[4].weather[0].description,
                diaCuatroMax: result.daily[4].temp.max,
                diaCuatroMin: result.daily[4].temp.min,
                diaCuatroHumedad: result.daily[4].humidity,
                diaCuatroViento: result.daily[4].wind_speed,

                diaCincoDateTime: dateFormat(new Date(result.daily[5].dt * 1000), "dd mmmm yyyy"),
                diaCincoIcono: result.daily[5].weather[0].icon,
                diaCincoClima: result.daily[5].weather[0].description,
                diaCincoMax: result.daily[5].temp.max,
                diaCincoMin: result.daily[5].temp.min,
                diaCincoHumedad: result.daily[5].humidity,
                diaCincoViento: result.daily[5].wind_speed,

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
                <div class="row row-cols-5">

                    <div class="col">
                        <div class="row row-cols-1">
                            <div class="col dia">
                                <p>Dia 1</p>
                                <p>{this.state.diaUnoDateTime}</p>
                            </div>
                            <div class="col icon">
                                <p>{this.state.diaUnoIcono}</p>
                                <Icono data={{icono: this.state.diaUnoIcono}}/>
                            </div>
                            <div class="col clima">
                                <p>{this.state.diaUnoClima}</p>
                            </div>
                            <div class="col max">
                                <p>Máx: {this.state.diaUnoMax}°C</p>
                            </div>
                            <div class="col min">
                                <p>Mín: {this.state.diaUnoMin}°C</p>
                            </div>
                            <div class="col humedad">
                                <p>Humedad: {this.state.diaUnoHumedad}%</p>
                            </div>
                            <div class="col viento">
                                <p>Viento: {this.state.diaUnoViento} m/s</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="row row-cols-1">
                            <div class="col dia">
                                <p>Dia 2</p>
                                <p>{this.state.diaDosDateTime}</p>
                            </div>
                            <div class="col icon">
                                <p>{this.state.diaDosIcono}</p>
                                <Icono data={{icono: this.state.diaDosIcono}}/>
                            </div>
                            <div class="col clima">
                                <p>{this.state.diaDosClima}</p>
                            </div>
                            <div class="col max">
                                <p>Máx: {this.state.diaDosMax}°C</p>
                            </div>
                            <div class="col min">
                                <p>Mín: {this.state.diaDosMin}°C</p>
                            </div>
                            <div class="col humedad">
                                <p>Humedad: {this.state.diaDosHumedad}%</p>
                            </div>
                            <div class="col viento">
                                <p>Viento: {this.state.diaDosViento} m/s</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="row row-cols-1">
                            <div class="col dia">
                                <p>Dia 3</p>
                                <p>{this.state.diaTresDateTime}</p>
                            </div>
                            <div class="col icon">
                                <p>{this.state.diaTresIcono}</p>
                                <Icono data={{icono: this.state.diaTresIcono}}/>
                            </div>
                            <div class="col clima">
                                <p>{this.state.diaTresClima}</p>
                            </div>
                            <div class="col max">
                                <p>Máx: {this.state.diaTresMax}°C</p>
                            </div>
                            <div class="col min">
                                <p>Mín: {this.state.diaTresMin}°C</p>
                            </div>
                            <div class="col humedad">
                                <p>Humedad: {this.state.diaTresHumedad}%</p>
                            </div>
                            <div class="col viento">
                                <p>Viento: {this.state.diaTresViento} m/s</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="row row-cols-1">
                            <div class="col dia">
                                <p>Dia 4</p>
                                <p>{this.state.diaCuatroDateTime}</p>
                            </div>
                            <div class="col icon">
                                <p>{this.state.diaCuatroIcono}</p>
                                <Icono data={{icono: this.state.diaCuatroIcono}}/>
                            </div>
                            <div class="col clima">
                                <p>{this.state.diaCuatroClima}</p>
                            </div>
                            <div class="col max">
                                <p>Máx: {this.state.diaCuatroMax}°C</p>
                            </div>
                            <div class="col min">
                                <p>Mín: {this.state.diaCuatroMin}°C</p>
                            </div>
                            <div class="col humedad">
                                <p>Humedad: {this.state.diaCuatroHumedad}%</p>
                            </div>
                            <div class="col viento">
                                <p>Viento: {this.state.diaCuatroViento} m/s</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="row row-cols-1">
                            <div class="col dia">
                                <p>Dia 5</p>
                                <p>{this.state.diaCincoDateTime}</p>
                            </div>
                            <div class="col icon">
                                <p>{this.state.diaCincoIcono}</p>
                                <Icono data={{icono: this.state.diaCincoIcono}}/>
                            </div>
                            <div class="col clima">
                                <p>{this.state.diaCincoClima}</p>
                            </div>
                            <div class="col max">
                                <p>Máx: {this.state.diaCincoMax}°C</p>
                            </div>
                            <div class="col min">
                                <p>Mín: {this.state.diaCincoMin}°C</p>
                            </div>
                            <div class="col humedad">
                                <p>Humedad: {this.state.diaCincoHumedad}%</p>
                            </div>
                            <div class="col viento">
                                <p>Viento: {this.state.diaCincoViento} m/s</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        )
    }
  
}
