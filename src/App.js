import React, { Component } from "react";
import BuscarCiudad from "./BuscarCiudad";
import Clima from './Clima';
import Mapa from './Mapa';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitud: 0,
            longitud: 0,
            ciudad: '',
            pais: '',
            mostrarClima: false,
            mensajeDeError: false
        }; 
      }

  componentDidMount() {
    // Obtener ubicación
    const success = position => {
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;
        this.setState({
            latitud: latitud,
            longitud: longitud
        });
        const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitud}&lon=${longitud}&lang=es&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`
        fetch(url)
        .then((result) => result.json())
        .then((result) => {
            this.setState({ciudad: result[0].name});
            this.setState({pais: result[0].country});
            this.setState({mostrarClima: true});
            this.setState({mensajeDeError: false}); 
        })
        .catch(error => {
            this.setState({mensajeDeError: true}); 
            console.error(error)
        });   
    };

    const error = () => {
        console.log("Error al obtener la ubicación");
      };
    
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, 
            { enableHighAccuracy: true, maximumAge: 2000, timeout: 5000 });
      }
    }
    render() {
        return (
        // <div className="App">
        //     <BuscarCiudad />
        //     <h4>Obtenido a partir de la geolocalización</h4>
        //     {this.state.latitud && <p>Latitud: {this.state.latitud}</p>}
        //     {this.state.longitud && <p>Longitud: {this.state.longitud}</p>}
        //     {this.state.mostrarClima ? <Clima data={this.state}/> : null}
        // </div>
        <div class="card-main">
            <div class="row row-cols-1">
                <div class="col city">
                    <p class="fs-2">{this.state.ciudad}</p>
                </div>
                <div class="col country">
                    <p class="fs-4">{this.state.pais}</p>
                </div>
                <Clima data={this.state}/>
            </div>
            <div class="row row-cols-2">
                <div class="col extra-value">Máxima</div>
                <div class="col extra-value">Mínima</div>
                <div class="col extra-value">Sensación Térmica</div>
                <div class="col extra-value">Humedad</div>
                <div class="col extra-value">Presión</div>
                <div class="col extra-value">Nubosidad</div>
                <div class="col extra-value">Viento</div>
                <div class="col extra-value">Presión</div>
                <div class="col extra-value">Presión</div>
            </div>
        </div>
        )
    }
  
}
