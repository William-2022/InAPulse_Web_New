import React, { useState, useEffect } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useCallback } from "react";

const CalculatorMap = ({ formData }) => {
  const [map, setMap] = useState(null);
  const { pickupLat, pickupLng, dropLat, dropLng } = formData;

  const onLoad = useCallback((map) => setMap(map), []);

  let initCenter = { lat: 43.6532, lng: -79.3832 };
  let zoom = 10;

  useEffect(() => {
    if (map) {
      const bounds = new window.google.maps.LatLngBounds();
      if (pickupLat) {
        bounds.extend({ lat: pickupLat, lng: pickupLng });
      }
      if (dropLat) {
        bounds.extend({ lat: dropLat, lng: dropLng });
      }
      if (pickupLat || dropLat) {
        map.fitBounds(bounds);
      }
    }
  }, [map, pickupLat, pickupLng, dropLat, dropLng]);

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100%" }}
      onLoad={onLoad}
      center={initCenter}
      zoom={zoom}
    >
      {pickupLat && <Marker position={{ lat: pickupLat, lng: pickupLng }} />}
      {dropLat && <Marker position={{ lat: dropLat, lng: dropLng }} />}
    </GoogleMap>
  );
};

export default CalculatorMap;
