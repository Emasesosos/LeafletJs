import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {

    const [state, setState] = useState({
        longitude: 0,
        latitude: 0,
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                setState({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude
                })
            },
            function (error) {
                console.error("Error Code = " + error.code + " - " + error.message);
            },
            {
                enableHighAccuracy: true
            }
        );
    }, []);

    return (
        <div>
            <h1>Geolocation</h1>
            <p>longitude: {state.longitude}</p>
            <p>latitude: {state.latitude}</p>
            <Link 
                to={{
                    pathname: "/map",
                    state,
                }}
            >
                See my location
            </Link>
        </div>
    );
};
