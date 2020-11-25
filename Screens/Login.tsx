import React, { FC, useState } from "react";
import {Text, View, StyleSheet, TouchableOpacity, Alert} from "react-native";
import { Button, Input } from "../componets";
import firebase from "firebase";

const App: FC = (props) => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  // ************login function ***************
    const login = async ()=>{
        if (email && password){
            try{
            const  user = await firebase.auth().signInWithEmailAndPassword(email,password);
            }catch (e) {
               Alert.alert("Error","Wrong Inputs")
            }
        }else {
            Alert.alert('Error', 'Missing Inputs')
        }
    }
  return (
    <View style={styles.container}>
      <Text>Lognin screen</Text>

      <Input placeholder={"Email"} onChageText={(text) => setEmail(text)} />
      <Input
        placeholder={"Password"}
        secureTextEntry
        onChageText={(text) => setPassword(text)}
      />

      <Button title={"Login"} onPress={login} />

      <View style={{ flexDirection: "row" }}>
        <Text>Dont have account</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
          <Text style={{ color: "blue" }}> Create here</Text>
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
