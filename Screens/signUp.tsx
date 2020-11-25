import React, { FC, useState } from "react";
import {Text, View, StyleSheet, Alert, TouchableOpacity, YellowBox} from "react-native";
import { Button, Input } from "../componets";
import { useLinkProps } from "@react-navigation/native";
import * as firebase from 'firebase';
import 'firebase/firestore';

const App: FC = (props) => {
  //states to manage

  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  // ************** a function to create the aacount ***************
  const signup = async () => {
    if (name && email && password) {
      try {
        const {user} = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        if (user) {

          //  ********saving date to firestore***********
            await  firebase.firestore().collection('users').doc(user.uid).set({name,email,password})
          Alert.alert(JSON.stringify(user));
            YellowBox.ignoreWarnings(['Setting a timer']);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      Alert.alert("error", "missing Field");
    }
  };

  return (
    <View style={styles.container}>
      <Text>sign up screen</Text>
      <Input placeholder={"Name"} onChageText={(text) => setName(text)} />
      <Input placeholder={"Email"} onChageText={(text) => setEmail(text)} />
      <Input
        placeholder={"Password"}
        secureTextEntry
        onChageText={(text) => setPassword(text)}
      />

      <Button title={"SignUp"} onPress={signup} />
      <View style={{ flexDirection: "row" }}>
        <Text>Already have account</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
          <Text style={{ color: "blue" }}> Login here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
