import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
//import { db } from './FirebaseConfig';

const Feedback = () => {
  const [feedbackType, setFeedbackType] = useState('feature');
  const [feedbackText, setFeedbackText] = useState('');

  const sendFeedback = () => {
    push(databaseRef, {
      feedbackType,
      feedbackText,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    }).then(() => {
      console.log('Feedback submitted successfully');
    }).catch((error) => {
      console.log('Error submitting feedback:', error);
    });
  };
  
{/*
  const sendFeedback = () => {
    db.ref('/feedback').push({
      //feedbackType,
      feedbackText,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    }).then(() => {
      console.log('Feedback submitted successfully');
    }).catch((error) => {
      console.log('Error submitting feedback:', error);
    });
  };
  */}

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={feedbackType}
        onValueChange={(itemValue) => setFeedbackType(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Feature Request" value="feature" />
        <Picker.Item label="Bug Report" value="bug" />
        <Picker.Item label="General Feedback" value="general" />
      </Picker>

      <TextInput
        style={styles.textInput}
        value={feedbackText}
        onChangeText={(text) => setFeedbackText(text)}
        placeholder="Enter your feedback"
        multiline={true}
      />

      <Button title="Send Feedback" onPress={sendFeedback} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  picker: {
    marginBottom: 15,
  },
  textInput: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
    minHeight: 100, // Set a minimum height for the text input
  },
});

export default Feedback;
