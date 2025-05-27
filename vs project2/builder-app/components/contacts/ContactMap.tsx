import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import { useEffect } from 'react';

export function ContactMap() {
  // Retrieve the key from the environment and log it to confirm it's being loaded.
  const apiKey = process.env.REACT_APP_Maps_API_KEY;
  useEffect(() => {
    // It's good practice to check if the key is actually present
    if (apiKey) {
      console.log('Loaded API key:', apiKey.substring(0, 10) + '...'); // Log a portion for security
    } else {
      console.warn('Google Maps API key is not set or not accessible via process.env.REACT_APP_Maps_API_KEY. Using fallback.');
    }
  }, [apiKey]);

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    // Provide a fallback key only if truly necessary for development and clearly mark it.
    // It's better to ensure the environment variable is correctly set.
    googleMapsApiKey: apiKey || 'AIzaSyA0TyBwPM1C5FRs-KDWwZLrLVb6sSKG4kg', // Replace with your actual fallback or remove if not needed
  });

  if (loadError) {
    console.error('Error loading Google Maps:', loadError);
    return <div className="p-4 text-red-500 bg-red-100 rounded-lg">Error loading maps: {loadError.message}</div>;
  }

  // Coordinates for проспект Шевченка, 1, Одеса
  const center = {
    lat: 46.46073227263883,
    lng: 30.750795899802718,
  };

  return (
      // The `h-full` class allows the map to fill the height of its parent container.
      // The parent div in `Contacts.tsx` (md:w-[54%]) will be stretched to match the height of the ContactInfo box,
      // and this `h-full` ensures the map itself also expands to that height.
      // On mobile, where the layout is stacked, this will adapt based on the container's height.
      <div className="w-full h-full rounded-[60px] overflow-hidden">
        {!isLoaded ? (
            <div className="flex items-center justify-center h-full bg-gray-200 rounded-[60px]">
              <p className="text-gray-500">Loading map...</p>
            </div>
        ) : (
            <GoogleMap
                mapContainerStyle={{
                  width: '100%', // This ensures the map fills the div container
                  height: '100%', // This ensures the map fills the div container
                }}
                center={center}
                zoom={15}
                options={{
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false,
                  styles: [
                    {
                      featureType: 'poi', // Points of Interest
                      elementType: 'labels',
                      stylers: [{ visibility: 'off' }], // Hide POI labels
                    },
                    // You can add more custom styles here if needed
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