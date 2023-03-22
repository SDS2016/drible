import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

////////////// Auth Stack imported screens ////////////////////////////
import Home from './Login-Signup/Home';
import Login from './login/Login';
import SignUp1 from './SignUp/SignUp1';
import SignUp2 from './SignUp/SignUp2';
import SignUp3 from './SignUp/SignUp3';


const Stack = createNativeStackNavigator(); 


const AuthStack = () => {

   



  return (
 
    <Stack.Navigator
        screenOptions={{
             headerStyle: { backgroundColor: 'black',  },
            // headerLeft:{},
            headerBackTitleVisible:false,
            headerTitle:true,
            headerTintColor:"white",
            title:"",
            headerLargeStyle:true,
            
            
            

        }}
      >
      <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp1"  component={SignUp1} />
      <Stack.Screen name="SignUp2"  component={SignUp2} />
      <Stack.Screen name="SignUp3"  component={SignUp3} />
    </Stack.Navigator>
    
  );
}

export default AuthStack

const styles = StyleSheet.create({})