"use client"; // makes this a client side component
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';

function Map() {
  const position = [51.505, -0.09];

// MapContainer = is the main component of react-leaflet which is responsible for initializing the map on the page, it is like a container.
// TileLayer is responsible for loading and displaying the tiles on the map.

  return (
    <MapContainer className='h-[33.66rem] sm:h-[61.5rem] overflow-hidden' center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&amp;copy <a href="https://www.openstreetmap.org/">Open Street Map</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;