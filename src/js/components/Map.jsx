import React, {PropTypes} from 'react';
import {GoogleMaps, Marker, OverlayView} from "react-google-maps";
import style from '../../scss/components/Map.scss';
import CompanyStore from '../stores/CompanyStore';

const Map = React.createClass({

  displayName: 'Map',

  getInitialState() {
    return {
      companies: CompanyStore.getCompaniesShownOnMap(),
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
      companies: CompanyStore.getCompaniesShownOnMap(),
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

  toOverlay(company, index) {
    var position = this.getCompanyPosition(company);

    return (
        <OverlayView
          position={position}
          key={'overlay' + index}
          getPixelPositionOffset={this.getPixelPositionOffset}
        >
          <div className="map-component__marker-label">
            {company[this.state.mappings.markerLabel]}
          </div>
        </OverlayView>
    );
  },

  getPixelPositionOffset (width, height) {
    return {x: -(width / 2), y: 0};
  },

  render() {
    return (
      <GoogleMaps containerProps={{
          style: {
            width: '100%',
            height: '250px'
          }
        }}
        googleMapsApi={
          "undefined" !== typeof google ? google.maps : null
        }
        zoom={10}
        center={this.getCompanyPosition(this.state.companies[0])}
      >
        {this.state.companies.map(this.toMarker, this)}
        {this.state.companies.map(this.toOverlay, this)}
      </GoogleMaps>
    );
  }

});

export default Map;
