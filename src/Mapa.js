import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker
} from "react-google-maps";

class Mapa extends React.Component {

  constructor(props) {
    super(props);
    this.state = {ciudad: '', latitud: 0, longitud: 0};
  }

  addMarker(e) {
    this.setState({
      latitud: e.latLng.lat(),
      longitud: e.latLng.lng(),
    });
    const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${this.state.latitud}&lon=${this.state.longitud}&lang=es&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`
    fetch(url)
    .then((result) => result.json())
    .then((result) => {
        this.setState({ciudad: result[0].name});
        this.props.handler(result[0].name);
    })
    .catch(error => {
        this.setState({mensajeDeError: true}); 
        console.error(error)
    });  
  }

  render() {
    return (
        <GoogleMap
          onClick={this.addMarker.bind(this)}
          defaultZoom={this.props.zoom}
          defaultCenter={this.props.center}
        >
              <Marker
                position={{ lat: this.state.latitud, lng: this.state.longitud }}
              />
        </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(Mapa));
