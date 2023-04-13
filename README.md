# mental-health-chatbot-app

Install node.js, npm, and react on your machine.

Requires the following npm packages
- npm install react-native
- npm install react-native-gifted-chat
- npm install react-native-elements
- npm install @react-navigation/native @react-navigation/stack
- npx install-expo-modules@latest
- npm install firebase --save

Requires the following python packages
- pip install tflearn
- pip install tensorflow
- pip install nltk
- pip install fast-api

To start the Fast API server, navigate to the py_model folder and run: `uvicorn fast:fast --host <your computer's IP address> --port 8000`
    
Make sure to replace the IP address in the Chat.js fetch call with the IP address where your Fast API server is running. If you're running the server locally, you can use localhost or 127.0.0.1. However, if you're running the React Native app on an emulator or a real device, you might need to use your computer's local IP address.

To start the native app, navigate to the native_app and run: `npx expo start`
