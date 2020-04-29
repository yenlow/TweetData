import React, { Component } from 'react';

import { Map, TileLayer } from 'react-leaflet';

class MapUS extends Component{
    state = {
        lat: 40.0423477,
        lng: -99.4082212,
        zoom: 4,
    }
    render(){
        const position = [this.state.lat, this.state.lng];

        return (
            <Map className="map" center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </Map>
        )
    }
}

export default MapUS;