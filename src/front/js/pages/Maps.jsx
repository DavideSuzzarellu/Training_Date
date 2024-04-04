import React, { useEffect, useContext } from 'react';
import { Context } from "../store/appContext.js";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';


const Maps = (coordinates) => {
    const { store, actions } = useContext(Context);

    const libraries = ['places'];
    const mapContainerStyle = {
        position: 'relative',
        width: '100%',
        height: '300px',
        overflow: 'hidden'
    };
    const center = {
        lat: coordinates.lat,
        lng: coordinates.lng,
    };
    console.log(center);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_API_KEY,
        libraries,
    });

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    );
};

export default Maps;