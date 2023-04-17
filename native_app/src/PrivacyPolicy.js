import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import FloatingButton from './FloatingButton';

const PrivacyPolicy = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FloatingButton navigation={navigation} />
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Introduction</Text>
          <Text style={styles.text}>
            Welcome to the Privacy Policy of our mental health awareness and assistance chatbot app. Our app uses machine learning to generate responses and is designed primarily for university students. We are committed to protecting your privacy and ensuring the security of your personal information.
          </Text>

          <Text style={styles.sectionTitle}>Personal Information We Collect</Text>
          <Text style={styles.text}>
            We collect the following types of personal information when you use our app:
            {'\n'}- Account Information: Your username and password when you create an account.
            {'\n'}- Chat Data: The conversations you have with the chatbot.
            {'\n'}- Usage Data: Information about how you interact with the app, such as the features you use and the duration of your sessions.
          </Text>

          <Text style={styles.sectionTitle}>How We Use Your Personal Information</Text>
          <Text style={styles.text}>
            We use your personal information for the following purposes:
            {'\n'}- To provide and improve our app's features and services.
            {'\n'}- To personalize your experience within the app.
            {'\n'}- To maintain and secure your account.
            {'\n'}- To analyze usage patterns and trends to improve the app's performance.
          </Text>

          <Text style={styles.sectionTitle}>Sharing Your Personal Information</Text>
          <Text style={styles.text}>
            We do not sell or share your personal information with third parties, except when it is necessary to provide our services, such as with machine learning providers that generate chatbot responses, or when required by law.
          </Text>

          <Text style={styles.sectionTitle}>Data Security</Text>
          <Text style={styles.text}>
            We take the security of your personal information seriously and implement industry-standard security measures to protect your data from unauthorized access, disclosure, or destruction. However, no method of data transmission or storage is completely secure, and we cannot guarantee absolute security.
          </Text>

          <Text style={styles.sectionTitle}>Changes to This Privacy Policy</Text>
          <Text style={styles.text}>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy within the app. You are advised to review this Privacy Policy periodically for any changes.
          </Text>

          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.text}>
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
            {'\n'}Email: support@example.com
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

export default PrivacyPolicy;
