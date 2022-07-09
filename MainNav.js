import * as React from 'react';
import { Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Local from './screens/Local';
import Activity from './screens/Activity';
import Inbox from './screens/Inbox';
import Profile from './screens/Profile';






const Tab = createBottomTabNavigator();

const MainNav= () => {
  return (
    <Tab.Navigator
      screenOptions={{
      tabBarActiveTintColor: '#FF2035',
      tabBarStyle: {
        height:100,
        //marginBottom:10,
        position:'absolute',
        backgroundColor:'black',
        borderTopColor:'#121212',
        paddingTop:2,
        paddingBottom:35,
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