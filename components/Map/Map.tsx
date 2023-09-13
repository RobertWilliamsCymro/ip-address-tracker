"use client"; // makes this a client side component
import 'leaflet/dist/leaflet.css';
import React, { useEffect } from 'react';
import { Marker, Popup, TileLayer, useMap, useMapEvent } from 'react-leaflet';
import { MapContainer } from '../../app/MapContainer'
interface Props {
  longitude: number;
  latitude: number;
}
function FlyMapTo(props: Props) {
  const { longitude, latitude } = props;
  const position = [longitude, latitude];
  const map = useMap();
  useEffect(() => {
    map.flyTo(position)
  }, [position])

  return null
}
function Map(props: Props) {

  const { longitude, latitude } = props;
  const position = [longitude, latitude];
  console.log("longitude", longitude);
  // MapContainer = is the main component of react-leaflet which is responsible for initializing the map on the page, it is like a container.
  // TileLayer is responsible for loading and displaying the tiles on the map.

  return (
    <MapContainer className='h-[33.66rem] sm:h-[61.5rem] overflow-hidden' center={position} zoom={3} scrollWheelZoom={true}>
      <TileLayer
        attribution='&amp;copy <a href="https://www.openstreetmap.org/">Open Street Map</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}></Marker>
      <FlyMapTo longitude={longitude} latitude={latitude} />
    </MapContainer>
  );
}

export default Map;