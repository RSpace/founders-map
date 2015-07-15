import React, {PropTypes} from 'react';
import {GoogleMaps, Marker} from "react-google-maps";
import style from '../../scss/components/Map.scss';

const Map = React.createClass({

  displayName: 'Map',

  propTypes: {
  },

  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    return (
      <GoogleMaps containerProps={{
          style: {
            width: '300px',
            height: '500px'
          }
        }}
        googleMapsApi={
          "undefined" !== typeof google ? google.maps : null
        }
        zoom={3}
        center={{lat: 37.457674, lng: -122.163452}}
      >
        <Marker
          position={{
            lat: 37.457674,
            lng: -122.163452
          }}
          key="Google"
        />
      </GoogleMaps>
    );
  }

});

export default Map;
