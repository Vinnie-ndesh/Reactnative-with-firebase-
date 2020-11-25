import React ,{FC, useEffect, useState} from 'react'
import {NavigationContainer } from '@react-navigation/native'
import firebase from  'firebase'
import AppStack from './appStack';
import AuthStack from './Athstack';

const MainNav: FC  = () =>{
    
const[ user, setUser] = useState<any>(null);
// a fuction to check if the user id loged in from firebase
 const boostrap =()=>{
     firebase.auth().onAuthStateChanged(user=>{
         if(user){
             setUser(user)
         }
     })
 }

 useEffect(()=>{boostrap()
},[])
//pass the empty arry to make sure that it is executed only once
return(
    <NavigationContainer>
        {user!=null ?<AppStack/>:<AuthStack/>}
    </NavigationContainer>
    )
}
export default MainNav