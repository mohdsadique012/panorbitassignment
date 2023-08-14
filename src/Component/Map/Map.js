import React, { useEffect, useRef, useState } from 'react';
import "./Map.css"
const Map = ({ latitude, longitude }) => {
  console.log(typeof latitude,longitude,"hfhf")
 
  const googleMapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const googleMap = initGoogleMap();
    setMap(googleMap);
  }, []);

  useEffect(() => {
    if (!map) return;

    new window.google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map
    });
  }, [map, latitude, longitude]);

  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: latitude, lng: longitude },
      zoom: 1
    });
  }

  return <div
    ref={googleMapRef}
    style={{ width: 450, height: 200, }}
    className='map'
  />;
}

export default Map;
