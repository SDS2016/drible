import * as React from 'react';
import { Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Local from './Local';
import Activity from './Activity';
import Inbox from './Inbox';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/FontAwesome';





const Tab = createBottomTabNavigator();

const MainNav= () => {
  return (
    <Tab.Navigator
      screenOptions={{
      tabBarActiveTintColor: '#FF2035',
      tabBarStyle: {
        marginBottom:20,
        position:'absolute',
        backgroundColor:'black',
        borderTopColor:'#121212',
        paddingTop:2,
        paddingBottom:20,
      },
      }}
    >
      
      <Tab.Screen name="Local" component={Local} 
      options={{
      headerShown:false,
      tabBarIcon: ({size, color}) => 
      (<Image style={{height:30, width:30, tintColor:color, resizeMode:'contain' }}source={require('./assets/local.png')}/>)
      
      }}/>
      <Tab.Screen name="Activity" component={Activity} 
      options={{
      headerShown:false, 
      tabBarIcon: ({size, color}) => 
      (<Image style={{height:30, width:30, tintColor:color, resizeMode:'contain'}}source={require('./assets/activity.png')}/>),
     
        }} />
      <Tab.Screen name="Inbox" component={Inbox} 
      options={{
      headerShown:false,
      tabBarIcon: ({size, color}) => 
      (<Image style={{height:35, width:35, tintColor:color ,resizeMode:'contain'}}source={require('./assets/inbox.png')}/>),
      
      }}/>
      <Tab.Screen name="Profile" component={Profile} 
      options={{
      headerShown:false,
      tabBarIcon: ({size, color}) => 
      (<Image style={{height:30, width:30, tintColor:color ,resizeMode:'contain'}}source={require('./assets/profile.png')}/>),
      
      
      }}/>
    </Tab.Navigator>
  );
}

export default MainNav;