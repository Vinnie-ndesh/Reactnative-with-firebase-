import React, { FC } from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import{Home, Dashbord } from "../Screens";
const { Navigator, Screen } = createStackNavigator();

const AppStack: FC = () => {
  return (
 <Navigator  screenOptions={{headerShown:false}}>
   <Screen  name="Home" component ={Home}/>
   <Screen  name="Dashbord" component ={Dashbord}/>
   </Navigator>

  );
};
export default AppStack