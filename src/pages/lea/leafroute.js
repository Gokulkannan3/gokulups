import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";
import truckIcon from './icons/truck (2).png';

const Leafroute = ({ awb }) => {
  const map = useMap();
  const [marker, setMarker] = useState(null);

  let truckIconOptions = {
    iconUrl: truckIcon,
    iconSize: [40, 40],
  };

  useEffect(() => {
    
    const updateMarkerLocation = () => {
      fetch(`http://172.22.81.182:8080/rfid/getloc/1Z78901T0594521395`)
        .then((response) => response.json())
        .then((locationData) => {
          const { latitude, longitude } = locationData;
          const newLatLng = L.latLng(latitude, longitude);

          if (marker) {
            marker.setLatLng(newLatLng);
          } else {
            setMarker(L.marker(newLatLng, { icon: L.icon(truckIconOptions) }).addTo(map));
          }

          map.setView(newLatLng, map.getZoom());
        })
        .catch((error) => {
          console.error("Error fetching location data:", error);
        });
    };

    updateMarkerLocation();

    const intervalId = setInterval(updateMarkerLocation, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [awb, map, marker, truckIconOptions]);

  return null;
};

export default Leafroute;
