import React, {PropTypes} from 'react';
import {GoogleMaps, Marker} from "react-google-maps";
import style from '../../scss/components/Map.scss';
import CompanyStore from '../stores/CompanyStore';

const Map = React.createClass({

  displayName: 'Map',

  propTypes: {
  },

  getInitialState() {
    return {
      companies: CompanyStore.getCompanies(),
      mappings: CompanyStore.getMappings()
    };
  },

  componentDidMount() {
    CompanyStore.addChangeListener(this._onChange);
  },
  componentWillUnmount() {
    CompanyStore.removeChangeListener(this._onChange);
  },
  _onChange() {
    this.setState({
      companies: CompanyStore.getCompanies(),
      mappings: CompanyStore.getMappings()
    })
  },

  getCompanyPosition(company) {
    return {
      lat: parseFloat(company[this.state.mappings.latitude], 10),
      lng: parseFloat(company[this.state.mappings.longitude], 10)
    };
  },

  toMarker(company, index) {
    var position = this.getCompanyPosition(company);

    return (
      <Marker
        position={position}
        key={'marker' + index}
      />
    );
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
        zoom={10}
        center={this.getCompanyPosition(this.state.companies[0])}
      >
        {this.state.companies.map(this.toMarker, this)}
      </GoogleMaps>
    );
  }

});

export default Map;
