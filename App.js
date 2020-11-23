import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBn3x9Oc7UEc2yv7NyI-KJyc9Wv_RecUb4",
    authDomain: "react-chatapp-6df18.firebaseapp.com",
    databaseURL: "https://react-chatapp-6df18.firebaseio.com",
    projectId: "react-chatapp-6df18",
    storageBucket: "react-chatapp-6df18.appspot.com",
    messagingSenderId: "398635131172",
    appId: "1:398635131172:web:0f3eae529611a2f31713b1",
    measurementId: "G-4C7XFDF4EL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
