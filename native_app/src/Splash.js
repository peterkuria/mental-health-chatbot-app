import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('BottomNavigation');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/icons8-bot-100.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default Splash;
