import Map, { Marker, useMap } from 'react-map-gl';
import React, { useRef, useEffect, useState } from 'react';
import '../app/mapbox-gl.css';

interface Props {
    longitude: number;
    latitude: number;
}

export default function MapContainer(props: Props) {

    const { longitude, latitude } = props;
    const mapRef = useRef(null);
    const [viewState, setViewState] = React.useState({
        longitude: longitude,
        latitude: latitude,
        zoom: 3.5
    });
    /*
    In this example, we create a mapRef using the useRef hook and pass it to the Map component using the ref prop. 
    We then use the useEffect hook to set the mapRef to the current property of the ref.
    Finally, we use the mapRef to call the getMap method and then use the flyTo method to move the map to the new location.
    */
    useEffect(() => {
        if (mapRef.current) {
            const map = (mapRef.current as any).getMap();
            map.flyTo({center: [longitude, latitude]});
        }
    }, [longitude, latitude, mapRef]);

    return (
        <Map
            {...viewState}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
            onMove={evt => setViewState(evt.viewState)}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            style={{ height: '80vh' }}
            ref={mapRef}
        >
            <Marker longitude={longitude} latitude={latitude} anchor="bottom" >
                <img src="../icon-location.svg" alt="current location" />
            </Marker>
        </Map>
    )
};