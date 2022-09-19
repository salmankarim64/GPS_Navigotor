import create from 'zustand';
import Geolocation from '@react-native-community/geolocation';

interface LocationInterface {
  longitude: number;
  latitude: number;
}

interface GPSInterface {
  currentLocation?: LocationInterface;
  timestamp?: any;
}

export const useGPSStore = create<GPSInterface>(set => ({
  getGeoLocation: () => {
    const config = {
      enableHighAccuracy: true,
      timeout: 2000,
      maximumAge: 3600000,
    };

    Geolocation.getCurrentPosition(
      info => {
        const {coords, timestamp} = info;
        // let timestemp = new Date(timestamp);
        // console.log('timestemp', timestemp);
        // let formatted = timestamp;
        set({
          currentLocation: {
            longitude: coords.longitude,
            latitude: coords.latitude,
          },
          timestamp: new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          }).format(timestamp),
        });
        console.log('INFO', info);
      },
      error => console.log('ERROR', error),
      config,
    );
  },
}));
