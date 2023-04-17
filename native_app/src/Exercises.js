import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import FloatingButton from './FloatingButton';

const Resources = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FloatingButton navigation={navigation} />
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.text}>
            Feature coming soon!
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
});

export default Resources;
