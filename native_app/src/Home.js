import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Icon } from 'react-native-elements';
import moment from 'moment';
import FloatingButton from './FloatingButton';

const Home = ({ navigation }) => {
  const [greeting, setGreeting] = useState('');
  const [hour, setHour] = useState(moment().hour());
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    const hour = moment().hour();
    if (hour >= 5 && hour < 12) {
      setGreeting(<> <Text style={styles.greeting}>Good morning,</Text></>);
    } else if (hour >= 12 && hour < 17) {
      setGreeting(<> <Text style={styles.greeting}>Good afternoon,</Text></>);
    } else {
      setGreeting(<> <Text style={styles.greeting}>Good evening,</Text></>);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/icons8-medium-risk-50.png')} style={styles.disclaimerImage}/>
          </View>
            <Text style={styles.disclaimerText}>Disclaimer:</Text>
            <Text style={styles.modalText}>
            Our mental health application is designed to provide informational support and is not intended to replace professional medical advice, diagnosis, or treatment. If you are experiencing a mental health crisis or emergency, please seek immediate assistance from a licensed healthcare provider or call your local emergency services. The use of our chatbot is entirely voluntary, and we assume no liability for any decisions or actions taken based on the information provided by the chatbot. By using our chatbot, you acknowledge and agree to these terms.
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.buttonText}>I agree</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <FloatingButton navigation={navigation} />
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>{greeting}</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/home_icon.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>"The best way to predict your future is to create it." - Abraham Lincoln</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Chat')}
      >
        <Icon name="chat" size={30} color="#297373" />
        <Text style={styles.buttonText}>Chat</Text>
        <Icon name="arrow-right" size={30} color="#000807" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Knowledge')}
      >
        <Icon name="book" type="font-awesome" size={30} color="#297373" />
        <Text style={styles.buttonText}>Knowledge Base</Text>
        <Icon name="arrow-right" size={30} color="#000807" />
      </TouchableOpacity>
      {/*
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Exercises')}
      >
        <Icon name="heart" type="font-awesome" size={30} color="#297373" />
        <Text style={styles.buttonText}>Exercises</Text>
        <Icon name="arrow-right" size={30} color="#000807" />
      </TouchableOpacity>
      */}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  imageContainer: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  greetingContainer: {
    alignItems: 'left',
    marginTop: 5,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  quoteContainer: {
    marginBottom: 20,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8E9F3',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000807',
    marginLeft: 10,
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '45%',
    paddingBottom: 160,
    paddingTop: 8,
  },
  disclaimerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: -50,
  },
  disclaimerImage: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: -100,
  },
  modalText: {
    marginBottom: 5,
    paddingBottom: 5,
    textAlign: 'justify',
  }
});

export default Home;
