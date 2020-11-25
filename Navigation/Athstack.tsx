import React, { FC } from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { SignUp, Login } from "../Screens";
const { Navigator, Screen } = createStackNavigator();

const AuthStack: FC = () => {
  return (
 <Navigator screenOptions={{headerShown:false}}>
   <Screen  name="Signup" component ={SignUp}/>
   <Screen  name="Login" component ={Login}/>
   
   </Navigator>

  );
};
export default AuthStack