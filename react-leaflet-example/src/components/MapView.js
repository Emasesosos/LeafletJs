import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css';
import { Markers } from './Markers';
import { places } from './../assets/data.json';

export const MapView = () => {

    const [state, setState] = useState({
        currentLocation: {
            lat: '52.52437',
            lng: '13.41053'
        },
        zoom: 13
    });

    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        if(location.state.latitude && location.state.longitude) {
            const currentLocation = {
                lat: location.state.latitude,
                lng: location.state.longitude
            };
            setState({
                ...state,
                currentLocation
            });
            console.log('state: ', state);
            history.replace({
                pathname: '/map',
                state: {}
            });
        }
        console.log('state2: ', state);
    }, []);

    console.log('state3: ', state);
    
    return (
        <MapContainer 
            center={state.currentLocation}
            zoom={state.zoom}
        >
            <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Markers places={ places } />
        </MapContainer>
    );

};
