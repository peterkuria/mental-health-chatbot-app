import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const FloatingButton = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Feedback');
  };

  return (
    <TouchableOpacity style={styles.floatingButton} onPress={handlePress}>
      <Icon name="feedback" size={30} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 45,
    right: 30,
    backgroundColor: 'rgba(242, 166, 90, 0.7)',
    borderRadius: 50,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    zIndex: 1,
  },
});

export default FloatingButton;
