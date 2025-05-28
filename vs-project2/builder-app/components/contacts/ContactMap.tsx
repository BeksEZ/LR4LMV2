import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import { useEffect } from 'react';

export function ContactMap() {
  const apiKey = process.env.REACT_APP_Maps_API_KEY;
  useEffect(() => {
    if (apiKey) {
      console.log('Loaded API key:', apiKey.substring(0, 10) + '...');
    } else {
      console.warn('Google Maps API key is not set or not accessible via process.env.REACT_APP_Maps_API_KEY. Using fallback.');
    }
  }, [apiKey]);

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey || 'AIzaSyA0TyBwPM1C5FRs-KDWwZLrLVb6sSKG4kg',
  });

  if (loadError) {
    console.error('Error loading Google Maps:', loadError);
    return <div className="p-4 text-red-500 bg-red-100 rounded-lg">Error loading maps: {loadError.message}</div>;
  }

  // проспект Шевченка, 1, Одеса
  const center = {
    lat: 46.46073227263883,
    lng: 30.750795899802718,
  };

  return (
      <div className="w-full h-full rounded-[60px] overflow-hidden">
        {!isLoaded ? (
            <div className="flex items-center justify-center h-full bg-gray-200 rounded-[60px]">
              <p className="text-gray-500">Loading map...</p>
            </div>
        ) : (
            <GoogleMap
                mapContainerStyle={{
                  width: '100%',
                  height: '100%',
                }}
                center={center}
                zoom={15}
                options={{
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false,
                  styles: [
                    {
                      featureType: 'poi',
                      elementType: 'labels',
                      stylers: [{ visibility: 'off' }],
                    },

                  ],
                }}
            >
              <Marker position={center} />
            </GoogleMap>
        )}
      </div>
  );
}

export default ContactMap;