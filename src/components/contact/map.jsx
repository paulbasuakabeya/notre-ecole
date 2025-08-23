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
    <div className="w-full px-4 md:px-0 py-0 bg-gray-100">
      {/* <h2 className="text-3xl font-bold mb-6 text-center">Notre localisation</h2> */}

      <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="CS Lestonnac Mobokoli"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.8931322048156!2d15.27599001074156!3d-4.431001747131664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3a454fb8ae39%3A0xa6283e7cdbe972cd!2sCS%20Lestonnac%20Mobokoli!5e0!3m2!1sfr!2scd!4v1755940684513!5m2!1sfr!2scd"
          width="100%"
          height="100%"
          style={{ border: 0 }} // ✅ Style en JSX
          allowFullScreen      // ✅ Attribut en camelCase sans égal
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" // ✅ camelCase JSX
        ></iframe>
      </div>
    </div>
  );
};

export default MapComponent;
