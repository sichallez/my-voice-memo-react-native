import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

function Loading({navigation}) {
  // if email -> record. if none -> email screen
  const handleLoad = email => {
    if (email) {
      navigation.navigate('Record', {
        email: email,
      });
    } else {
      navigation.navigate('Email');
    }
  };

  // check localstor for email --> call handleLoad
  const checkStorage = async () => {
    try {
      let email = await AsyncStorage.getItem('localEmail');
      handleLoad(email);
    } catch (error) {}
  };

  checkStorage();
  SplashScreen.hide();

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0C1313',
    flex: 1,
  },
});

export default Loading;
