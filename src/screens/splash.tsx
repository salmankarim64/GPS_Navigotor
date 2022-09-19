import React, {useEffect, useRef} from 'react';
import {Button, Animated, Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

export default function Splash({navigation}: any) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeLogo = useRef(new Animated.Value(0)).current;
  Animated.timing(fadeAnim, {
    toValue: 0.6,
    duration: 5000,
    useNativeDriver: true,
  }).start();

  Animated.timing(fadeLogo, {
    toValue: 0.7,
    duration: 2000,
    useNativeDriver: true,
  }).start();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 6000);
  }, []);
  return (
    <View style={styles.splash}>
      <LinearGradient
        colors={['#0b496c', '#b4d3e4', '#0b496c']}
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <View style={styles.container}>
          <Animated.Image
            style={[
              styles.logo,
              {
                opacity: fadeLogo,
              },
            ]}
            source={require('../assets/images/logo.png')}
          />

          <Animated.Text
            style={[
              styles.logoName,
              {
                opacity: fadeLogo,
              },
            ]}>
            {' '}
            GPS Navigator{' '}
          </Animated.Text>
        </View>
        <View style={styles.text}>
          <Animated.Text
            style={[
              styles.tagLine,
              {
                opacity: fadeAnim,
              },
            ]}>
            {' '}
            Get you global position{' '}
          </Animated.Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  splash: {
    //backgroundColor: '#0b496c',
    flex: 1,
  },
  container: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 400,
    opacity: 0.8,
  },

  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoName: {
    fontSize: 25,
    fontWeight: '700',
  },
  tagLine: {
    fontSize: 20,
    fontWeight: '500',
    opacity: 0.6,
  },
});
