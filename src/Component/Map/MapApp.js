import React, { useState, useEffect, useContext } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import Map from './Map';
import { useProfileGlobal, AppContext } from '../../Context/ProfileContext';

// API key of the google map
const GOOGLE_MAP_API_KEY = 'AIzaSyBv8esU-asiesttxGQMcJm5MJ7oiAyEXcY';

const MapApp = () => {
  const [loadMap, setLoadMap] = useState(false);
  const Data = useContext(AppContext);

  // using useefect for getting single data of user
  const profile_data = Data.filteredProfiles[0];
  const latitudeNumber = parseFloat(profile_data?.address.geo.lat)
  const longitudeNumber = parseFloat(profile_data?.address.geo.lng)
  useEffect(() => {
    const options = {
      apiKey: GOOGLE_MAP_API_KEY,
      version: "weekly",
      libraries: ['geometry']
    };

    new Loader(options).load().then(() => {
      setLoadMap(true);
    }).catch(e => {
      console.error('Sorry, something went wrong: Please try again later. Error:', e);
    });
  }, []);

  return (
    <div className="Map">
     
      {!loadMap ? <div>Loading...</div> : <Map latitude={latitudeNumber} longitude={longitudeNumber} />}
      <br />
    </div>
  );
}

export default MapApp;
