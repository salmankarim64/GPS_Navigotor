import React from 'react';
import {Button, Image, Share, StyleSheet, Text, View} from 'react-native';
import Gps from '../context/gps';
import LinearGradient from 'react-native-linear-gradient';
import {useGPSStore} from '../store/gps';

export default function Home() {
  const {currentLocation, timestamp, getGeoLocation} = useGPSStore();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `On ${timestamp}, Your location is recorded at Longitude: ${currentLocation?.longitude}: Latitude : ${currentLocation?.latitude} by GPS navigator`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      //alert(error.message);
    }
  };
  return (
    <LinearGradient
      colors={['#0b496c', '#b4d3e4', '#0b496c']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <View style={styles.infoSection}>
        <Text> Longitude: {currentLocation?.longitude}</Text>
        <Text> Latitude : {currentLocation?.latitude}</Text>
        <Text> Time: {timestamp}</Text>
        {timestamp && (
          <Button
            title="Share your location"
            onPress={() => {
              onShare();
            }}></Button>
        )}
      </View>
      <View style={styles.getSection}>
        <Button
          title="Get global Position"
          onPress={() => {
            getGeoLocation();
          }}>
          {' '}
        </Button>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    overflow: 'hidden',
    margin: 10,
    width: 199,
    height: undefined,
  },
  infoSection: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  getSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
