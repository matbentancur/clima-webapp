import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Mapa extends Component {
  static defaultProps = {
    center: {
      lat: -32.928523,
      lng: -56.083731
    },
    zoom: 7
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default Mapa;