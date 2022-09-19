import React from 'react';
import {Button} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export default function index() {
  const getGeoLocaation = () => {
    const config = {
      enableHighAccuracy: true,
      timeout: 2000,
      maximumAge: 3600000,
    };

    Geolocation.getCurrentPosition(
      info => console.log('INFO', info),
      error => console.log('ERROR', error),
      config,
    );
  };
  return (
    <>
      <Button
        title="GetCordinates"
        onPress={() => {
          getGeoLocaation();
        }}
      />
    </>
  );
}
