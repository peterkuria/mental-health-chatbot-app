import React, { useState, useEffect, useRef } from 'react';
import { GiftedChat, SystemMessage, InputToolbar, Composer } from 'react-native-gifted-chat';
import { SafeAreaView, StyleSheet, View, Text, useWindowDimensions, Image, TouchableOpacity } from 'react-native';
import botIcon from '../assets/icons8-circled-user-female-skin-type-6-48.png';
import FloatingButton from './FloatingButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Chat = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const headerFontSize = width > 500 ? 24 : 18;
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [userHasSentMessage, setUserHasSentMessage] = useState(false);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello! How can I help you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Cece',
          avatar: botIcon,
        },
      },
      {
        _id: 0,
        text: 'Our mental health chatbot provides informational support and is not a substitute for professional medical advice. If you have a mental health crisis or emergency, contact a licensed healthcare provider or your local emergency services. Using our chatbot is voluntary, and we assume no liability for decisions made based on the chatbot\'s information. By using our chatbot, you agree to these terms.',
        createdAt: new Date(),
        system: true
      },
    ]);
  }, []);

  useEffect(() => {
    const saveMessages = async () => {
      try {
        await AsyncStorage.setItem('chatMessages', JSON.stringify(messages));
      } catch (e) {
        console.error('Failed to save chat messages to local storage:', e);
      }
    };

    saveMessages();
  }, [messages]);

  const onSend = async (newMessages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));
    setTyping(true); // Display typing indicator
    if (!userHasSentMessage && newMessages.length > 0) {
      setUserHasSentMessage(true);
      setShowButtons(false);
    }    

    try {
      // Call the FastAPI endpoint to get the model's response
      const userInput = newMessages[0].text;
      const response = await fetch('http://10.55.4.85:8000/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: userInput }),
      });
      const jsonResponse = await response.json();

      const typingMessageId = Math.random(); // Generate a unique ID for the typing message

      // Add a message with the typing indicator
      if (newMessages.length > 0 && newMessages[0].text.trim().length > 0) {
        const typingMessage = {
          _id: typingMessageId,
          text: 'Buddy is typing...',
          createdAt: new Date(),
          system: true,
        };
        setMessages((previousMessages) => GiftedChat.append(previousMessages, typingMessage));
      }

      // Delay bot's response by 2 seconds
      setTimeout(() => {
        const botResponse = {
          _id: Math.random(),
          text: jsonResponse.response,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Cece',
            avatar: botIcon,
          },
        };
        setMessages((previousMessages) => GiftedChat.append(previousMessages, botResponse));
        setTyping(false); // Hide typing indicator
  
        // Remove the typing message from the messages list
        setMessages((previousMessages) => previousMessages.filter(message => message._id !== typingMessageId));
      }, 2000);
  
    } catch (error) {
      console.error('Error fetching data:', error);
      // Show an error message to the user or handle the error as needed
    }
  };
   
  const renderSystemMessage = (props) => (
    <SystemMessage
      {...props}
      wrapperStyle={{ backgroundColor: '#FFFFFF', paddingHorizontal: 16 }}
      textStyle={{ color: 'gray' }}
      renderTime={() => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={warningIcon} style={{ width: 24, height: 24, marginRight: 5 }} />
          <Text style={{ color: 'gray', fontSize: 12 }}>{props.currentMessage.createdAt.toLocaleTimeString()}</Text>
        </View>
      )}
    />
  );

  const renderInputToolbar = (props) => {
    const handleButtonPress = (text, inputToolbarProps) => {
      const newText = `${inputToolbarProps.text.trim()} ${text}`;
      inputToolbarProps.onTextChanged(newText);
    
      if (newText.length > 0 && showButtons) {
        setShowButtons(false);
      }
    };
    
  
    return (
      <View style={{ flexDirection: 'column', alignItems: 'stretch', flex: userHasSentMessage ? 1 : 0,}}>
        <InputToolbar
          {...props}
          containerStyle={{
            backgroundColor: '#F5F5F5',
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 20,
            marginBottom: 5,
            paddingLeft: 10,
            paddingRight: 10,
            
          }}
        />
        {showButtons && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.pelletButton} onPress={() => handleButtonPress('I am feeling ', props)}>
              <Text style={styles.buttonText}>I am feeling...</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pelletButton} onPress={() => handleButtonPress('What is depression?', props)}>
              <Text style={styles.buttonText}>What is depression?</Text>
            </TouchableOpacity>

          </View>
        )}
      </View>
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <FloatingButton navigation={navigation} />
      <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        alignTop={true}
        renderSystemMessage={renderSystemMessage}
        renderInputToolbar={renderInputToolbar}
        containerStyle={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          padding: 10,
          marginBottom: showButtons ? 70 : 0
        }}        
        //height={height - 70 - (showButtons ? 60 : 0)}

      />
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
  },
  buttonContainer: {
    position: 'absolute',
    bottom: -50,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  
  pelletButton: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: '#4E878C',
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
  },
  
});

export default Chat;