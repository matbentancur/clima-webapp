import React, { Component } from "react";
import BuscarCiudad from './BuscarCiudad';
import Clima from './Clima';
import Mapa from './Mapa';
import Pronostico from "./Pronostico";
import Alerta from "./Alerta";
import Aire from "./Aire";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitud: 0,
            longitud: 0,
            ciudad: '',
            pais: '',
            mostrarClima: false,
            mostrarMensajeDeError: false,
            mensajeDeError: ''
        }; 
        this.handler = this.handler.bind(this)
        this.handlerCiudad = this.handlerCiudad.bind(this)
    }
  
    handler(latitud, longitud) {
      const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitud}&lon=${longitud}&lang=es&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`
      fetch(url)
      .then((result) => result.json())
      .then((result) => {
          this.setState({latitud: result[0].lat, longitud: result[0].lon, pais: result[0].country, 
            ciudad: result[0].name, mostrarMensajeDeError: false});
      })
      .catch(() => {
          this.setState({mostrarMensajeDeError: true, mensajeDeError: 'No se pudo obtener el clima, seleccione o ingrese otra ciudad.'});
      });
    }

    handlerCiudad(ciudad) {
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&imit=1&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`
        fetch(url)
        .then((result) => result.json())
        .then((result) => {
            this.setState({latitud: result[0].lat, longitud: result[0].lon, pais: result[0].country, 
              ciudad: result[0].name, mostrarMensajeDeError: false});
        })
        .catch(() => {
            this.setState({mostrarMensajeDeError: true, mensajeDeError: 'No se pudo obtener el clima, seleccione o ingrese otra ciudad.'});
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
            this.setState({mostrarMensajeDeError: false}); 
        })
        .catch(error => {
            this.setState({mostrarMensajeDeError: true}); 
            console.error(error)
        });   
    };

    const error = () => {
        this.setState({mostrarMensajeDeError: true, mensajeDeError: 'No se permitió el acceso a la ubicación'});
    };
    
    if (navigator.geolocation) {
        navigator.permissions
          .query({ name: "geolocation" })
          .then(function (result) {
            if (result.state === "granted" || result.state === "prompt") {
              navigator.geolocation.getCurrentPosition(success, error, 
             { enableHighAccuracy: true, maximumAge: 2000, timeout: 5000 });
            }
            result.onchange = function () {
              console.log(result.state);
            };
          });
      }
      
    }

    renderBusquedaYMapa() {
        return (
        <div class="panel-tarjetas">
            <BuscarCiudad handlerCiudad = {this.handlerCiudad}/>
            <div class="tarjeta-mapa">
                <div class="row row-cols-1">
                    <Mapa handler = {this.handler} data={this.state}
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
                        loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
                        containerElement={<div style={{ height: `200px` }} />}
                        mapElement={<div style={{ height: `100%`, width: `100%`, borderRadius: `15px` }} />}
                        center={{ lat: -32.928523, lng: -56.083731 }}
                        zoom={6}
                    />
                </div>
            </div>
        </div>
        )
    }

    render() {
        const mostrarMensajeDeError = this.state.mostrarMensajeDeError;
        if (mostrarMensajeDeError) {
            return (
            <div class="panel-tarjetas">
            {this.renderBusquedaYMapa()}
                <div class="tarjeta-error">
                    <div class="alert alert-warning" role="alert">
                        {this.state.mensajeDeError}
                    </div>
                </div>
            </div>
            )
        }
        return (
        <div class="panel-tarjetas">
            {this.renderBusquedaYMapa()}
            <Clima 
                data={this.state}
            />
            <Pronostico 
                data={this.state}
            />
            <Aire 
                data={this.state}
            />
            <Alerta 
                data={this.state}
            />
        </div>
        )
    }
  
}
