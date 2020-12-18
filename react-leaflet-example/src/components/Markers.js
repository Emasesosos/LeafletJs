import React from 'react';
import { Marker } from 'react-leaflet';
import { IconLocation } from './IconLocation';

export const Markers = ({ places }) => {

    const markers = places.map((place, i) => {
        return <Marker 
                    key={ i }
                    position={ place.geometry }
                    icon={ IconLocation }
                />
    });

    return (
        markers
    );
};
