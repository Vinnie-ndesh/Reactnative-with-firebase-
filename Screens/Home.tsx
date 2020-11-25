import React, {FC, useState} from "react";
import { Text, View, StyleSheet } from "react-native";
import {Button, Input} from "../componets";
import firebase from "firebase";

const App: FC = (props) => {

  const  signOut =()=> {firebase.auth().signOut()
    props.navigation.navigate("Login")
  }
  const  [message,sentmessage] = useState <string|null>(null)

  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button title={"signOut"} onPress={signOut}/>
<Input placeholder={"write something"} onChageText={(text)=>sentmessage(text)}/>
      <View>
        
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
