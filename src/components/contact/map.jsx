import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent
 = () => {
  const containerStyle = {
    width: '100%',
    height: '400px',  // Taille de la carte
  };

  const center = {
    lat: -4.43643,  // Latitude pour Bypass Bel'air, Kinshasa
    lng: 15.27793,  // Longitude pour Bypass Bel'air, Kinshasa
  };

  return (
    <div>
      {/* <h1>Contactez-nous</h1> */}
      <LoadScript googleMapsApiKey=" AIzaSyDkK4lgmvhCrOZ_6b7PUKvxrU7uj7sdOJ4">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}  // Centre de la carte
          zoom={13}  // Zoom de la carte
        >
          <Marker position={center} />  {/* Marqueur à la position */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
