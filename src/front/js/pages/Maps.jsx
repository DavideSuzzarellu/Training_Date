import React, { useEffect, useContext } from 'react';
import { Context } from "../store/appContext.js";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '300px',
    overflow: 'hidden'
};
const center = {
    lat: 7.2905715,
    lng: 80.6337262,
};


const Maps = () => {
    const { store, actions } = useContext(Context);
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