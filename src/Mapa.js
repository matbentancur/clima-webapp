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
    this.state = {latitud: 0, longitud: 0};
  }

  addMarker(e) {
    this.setState({
      latitud: e.latLng.lat(),
      longitud: e.latLng.lng(),
    });

    this.props.handler(this.state.latitud, this.state.longitud);
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
