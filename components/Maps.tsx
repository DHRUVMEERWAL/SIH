
import React, { useEffect, useState } from 'react';
import { GoogleMap, DirectionsRenderer, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 28.6139,
  lng: 77.209, // Center of Delhi
};

// 28.746652439713586, 77.09602599168493

// Define stops for multiple buses
const busRoutes = [
  {
    color: '#FF0000', // Color for Bus 1
    stops: [
  { lat: 28.7420847, lng: 77.1032095 }, // Shahbad Dairy
  { lat: 28.74594, lng: 77.098502 }, // Shahbad Dairy A Block
  { lat: 28.745643, lng: 77.103037 }, // St. Xavier School Shahbad
  { lat: 28.7494317, lng: 77.1125599 }, // Shahbad Daulatpur Gaon
  { lat: 28.74532, lng: 77.11643 }, // Delhi Engg College Shahbad
  { lat: 28.7382677, lng: 77.0822151 }, // Rohini Sec-16 Xing
  { lat: 28.7382677, lng: 77.0822151 }, // Rohini Sec 16 (T)
  { lat: 28.731714, lng: 77.124859 }, // Rohini Sec 16 (Maharaja Aggarsen Dharam Sthal)
  { lat: 28.73948, lng: 77.12352 }, // Rohini Sec-16 Pocket-I
  { lat: 28.7381246, lng: 77.1273383 }, // District Park Sec-16 Rohini
  { lat: 28.7309194, lng: 77.1277312 }, // Rohini Sec-15 E-2
  { lat: 28.7438308, lng: 77.1343149 }, // Rohini Sec 18 Pocket A
  { lat: 28.7430568, lng: 77.1355733 }, // Rohini Sec 18
  { lat: 28.7358, lng: 77.1377 }, // Rohini Sec 18 B Block
  // { lat: 30.3675383, lng: 76.7665194 }, // Manav Chowk Sector - 15 Delhi
  // { lat: 28.7309194, lng: 77.1277312 }, // Rohini Sec 15
  // { lat: 28.7309194, lng: 77.1277312 }, // Rohini Sec-15
  // { lat: 28.727911, lng: 77.13044 }, // Alok Kunj
  // { lat: 28.7123645, lng: 77.1192482 }, // Vidya Vihar Marg
  // { lat: 28.7187288, lng: 77.1249803 }, // DC Chowk Rohini
  // { lat: 28.716082, lng: 77.122753 }, // Pratibha School Rohini Sec 9
  // { lat: 28.7161663, lng: 77.1240672 }, // Rohini Sec-9
  // { lat: 28.7083005, lng: 77.1253316 }, // Rohini Sec 7 and 8 Crossing
  // { lat: 28.70706, lng: 77.12701 }, // Fire Station Sec-8
  // { lat: 28.70538, lng: 77.13204 }, // Madhuban Chowk Outer Ring Road
  // { lat: 28.6984674, lng: 77.1262246 }, // Saraswati Vihar C Block
  // { lat: 28.694143, lng: 77.1102088 }, // Puspanjali Enclave
  // { lat: 28.7382677, lng: 77.0822151 }, // Rohini Depot - 3
  // { lat: 28.6922954, lng: 77.0916394 }, // Mangolpur School
  // { lat: 28.6910277, lng: 77.1010516 }, // West Enclave (ORR)
  // { lat: 28.6978133, lng: 77.0968555 }, // Mangol Puri B Block (ORR)
  // { lat: 28.6795426, lng: 77.0946206 }, // Peera Garhi Chowk
  // { lat: 28.6750083, lng: 77.0940325 }, // Peera Garhi Depot
  // { lat: 28.6720788, lng: 77.0902615 }, // Bhairon Enclave
  // { lat: 28.6681, lng: 77.0929 }, // P.Vihar Power Houe
  // { lat: 28.6641293, lng: 77.0895421 }, // Sunder Vihar
  // { lat: 28.6580377, lng: 77.0908908 }, // Meera Bagh
  // { lat: 28.6580377, lng: 77.0908908 }, // Meera Bagh Apartment
  // { lat: 28.6483211, lng: 77.0816288 }, // Major Bhupinder Singh Nagar
  // { lat: 18.7211287, lng: 73.6580359 }, // CRPF Camp
  // { lat: 28.6423354, lng: 77.0827079 }, // Manohar Nagar
  // { lat: 28.509731, lng: 77.2337692 }, // Krishna Park
  // { lat: 28.6362565, lng: 77.0791108 }, // Kangra Niketan
  // { lat: 28.6295538, lng: 77.0801899 }, // Janak Puri District Centre
  // { lat: 28.6290177, lng: 77.0765833 }, // Dholi Piao
  // { lat: 28.6386438, lng: 77.07206 }, // Vikaspuri Crossing
  { lat: 28.624721, lng: 77.067882 }, // Uttam Nagar Terminal / A1 Janakpuri
  { lat: 28.6169331, lng: 77.0718329 }, // Jivan park
  { lat: 28.6251113, lng: 77.0897898 }, // C-1 Janak Puri
  { lat: 28.6251113, lng: 77.0897898 }, // C-1 Janak Puri
  { lat: 28.615759, lng: 77.081724 }, // C-2 Janak Puri
  { lat: 28.6147306, lng: 77.0852059 }, // C2D Janak Puri
  { lat: 28.61195, lng: 77.08603 }, // Dabri Crossing (Pankha Road)
  { lat: 28.6102755, lng: 77.0976348 }, // Desu Colony Janak Puri
  { lat: 28.6085535, lng: 77.0971203 }, // SagarPur Vashisht Park
  { lat: 28.608885, lng: 77.106121 }, // Nangal Raya DDA Market
  { lat: 28.6123915, lng: 77.0894701 }, // D Block Janak Puri (Pankha Road)
    ],
  },
  // {
  //   color: '#0000FF', // Color for Bus 2
  //   stops: [
  //     { lat: 28.8196, lng: 77.0937 }, // Shahbad Dairy
  //     { lat: 28.8186, lng: 77.0941 }, // Shahbad Dairy A Block
  //     // ... (Include all stops for Bus 2)
  //     { lat: 28.7409, lng: 77.0627 }, // Jivan park
  //   ],
  // },
];

const MapComponent: React.FC = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDrkyJwOz9jQAQCLL7du8rzvIffv6NzpLw',
  });

  const [directions, setDirections] = useState<Map<string, google.maps.DirectionsResult | null>>(new Map());

  useEffect(() => {
    if (!isLoaded) return;

    const directionsService = new google.maps.DirectionsService();

    busRoutes.forEach((route, index) => {
      const waypoints = route.stops.slice(1, route.stops.length - 1).map((stop) => ({
        location: stop,
        stopover: true,
      }));

      directionsService.route(
        {
          origin: route.stops[0],
          destination: route.stops[route.stops.length - 1],
          waypoints: waypoints,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirections((prev) => new Map(prev).set(`bus-${index}`, result));
          } else {
            console.error(`Error fetching directions for bus ${index}: ${result}`);
          }
        }
      );
    });
  }, [isLoaded]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>

      {Array.from(directions.entries()).map(([key, result]) => (
        <DirectionsRenderer
          key={key}
          directions={result || undefined}
          options={{
            polylineOptions: {
              strokeColor: busRoutes[parseInt(key.split('-')[1], 10)].color,
              strokeOpacity: 0.8,
              strokeWeight: 4,
            },
          }}
        />
      ))}
    </GoogleMap>
  );
};

export default MapComponent;
