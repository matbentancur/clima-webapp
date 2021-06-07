import React, { Component } from "react";
import BuscarCiudad from './BuscarCiudad';
import Clima from './Clima';
import Map from './Mapa';

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
        <div class="card-panel">
            <BuscarCiudad />
            <div class="card card-main">
                <Clima data={this.state}/>
            </div>
            <div class="card-map">
                <div class="row row-cols-1">
                <Map
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
                    loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%`, width: `100%` }} />}
                    center={{ lat: -32.928523, lng: -56.083731 }}
                    zoom={6}
                />
                </div>
            </div>
        </div>

        )
    }
  
}
