import React, { Component } from "react";
import BuscarCiudad from './BuscarCiudad';
import Clima from './Clima';
import Mapa from './Mapa';
import Pronostico from "./Pronostico";
import Alerta from "./Alerta";

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
        this.handler = this.handler.bind(this)
    }
  
    handler(ciudad) {
      this.setState({
        ciudad: ciudad
      })
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&imit=1&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`
      fetch(url)
      .then((result) => result.json())
      .then((result) => {
          this.setState({pais: result[0].country});
      })
      .catch(error => {
          this.setState({mensajeDeError: true}); 
          console.error(error)
      });
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
        <div class="panel-tarjetas">
            <BuscarCiudad handler = {this.handler}/>
            <Clima 
                data={this.state}
            />
            <Pronostico 
                data={this.state}
            />
            <div class="tarjeta-mapa">
                <div class="row row-cols-1">
                    <Mapa handler = {this.handler}
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
                        loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%`, width: `100%`, borderRadius: `15px` }} />}
                        center={{ lat: -32.928523, lng: -56.083731 }}
                        zoom={6}
                    />
                </div>
            </div>
            <Alerta 
                data={this.state}
            />
        </div>
        )
    }
  
}
