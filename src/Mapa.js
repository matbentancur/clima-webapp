import React from "react";
import Clima from './Clima';
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker
} from "react-google-maps";

class MapWithMarkers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {ciudad: '', latitud: 0, longitud: 0, mostrarClima: false };
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
        this.setState({mostrarClima: true});
        this.setState({mensajeDeError: false}); 
    })
    .catch(error => {
        this.setState({mensajeDeError: true}); 
        console.error(error)
    });  
  }

  render() {
    return (
      <div>
        <GoogleMap
          onClick={this.addMarker.bind(this)}
          defaultZoom={this.props.zoom}
          defaultCenter={this.props.center}
        >
              <Marker
                position={{ lat: this.state.latitud, lng: this.state.longitud }}
              />
        </GoogleMap>
      {this.state.mostrarClima ? <Clima data={this.state}/> : null}
      </div>
    );
  }
}

export default withScriptjs(withGoogleMap(MapWithMarkers));
