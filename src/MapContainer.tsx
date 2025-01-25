import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define the type for location
interface Location {
  latitude: number;
  longitude: number;
}

interface MapContainerProps {
  location: Location | null;
}

const MapContainer: React.FC<MapContainerProps> = ({ location }) => {
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const defaultCenter = location
    ? { lat: location.latitude, lng: location.longitude }
    : { lat: -34.397, lng: 150.644 };

  return (
    <LoadScript googleMapsApiKey='60f288361458402fbb118f785afa57c7'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={8}
        center={defaultCenter}
      >
        {location && <Marker position={{ lat: location.latitude, lng: location.longitude }} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
