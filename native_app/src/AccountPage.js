import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, TextInput, Button, Text } from 'react-native';
import FloatingButton from './FloatingButton';

const AccountPage = ({ navigation }) => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSave = () => {
    // Implement your save logic here, e.g., updating user details in your backend
    console.log('User details saved:', { username, password });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FloatingButton navigation={navigation} />
      <View style={styles.form}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={(text) => setName(text)}
          placeholder="Edit your username"
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Enter your password"
          secureTextEntry
        />
        <Button title="Save" onPress={handleSave} />
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
  form: {
    marginTop: 30,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
  },
});

export default AccountPage;
