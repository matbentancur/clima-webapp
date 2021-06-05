import React, { Component } from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitud: 0,
            longitud: 0,
            ciudad: '',
            clima: []
        }; 
      }

  componentDidMount() {
    // Obtener ubicación
    const success = position => {
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;
        console.log(latitud, longitud);
        this.setState({
            latitud: latitud,
            longitud: longitud
        });
        const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitud}&lon=${longitud}&lang=es&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`
        console.log(url)
        fetch(url)
        .then((result) => result.json())
        .then((result) => {
            console.log(result[0].name)
            this.setState({
                ciudad: result[0].name
            });
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Montevideo&lang=es&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}&units=metric`
            console.log(url)
            fetch(url)
            .then((result) => result.json())
            .then((result) => {
                this.setState({
                    clima: result.weather[0].description
                });
            })
        })
      
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
        <div className="App">
            <h1>RIA 2021 - Clima</h1>
            {this.state.latitud && <p>Latitud: {this.state.latitud}</p>}
            {this.state.longitud && <p>Longitud: {this.state.longitud}</p>}
            {this.state.ciudad && <p>Ciudad: {this.state.ciudad}</p>}
            {this.state.clima && <p>Mostrando el clima en Montevideo: {this.state.clima}</p>}
        </div>
        )
    }
  
}