import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Local from './Local';
import Activity from './Activity';
import Inbox from './Inbox';
import Profile from './Profile';



const Tab = createBottomTabNavigator();

const MainNav= () => {
  return (
    <Tab.Navigator
      screenOptions={{
      tabBarActiveTintColor: '#FF2035',
      tabBarStyle:{
        position:'absolute',
        backgroundColor:'black',
        height: 100,
        borderTopColor:'#121212',
        }
        
      
        

      }}
    >
      <Tab.Screen name="Local" component={Local}  options={{headerShown:false}} />
      <Tab.Screen name="Activity" component={Activity} options={{headerShown:false}} />
      <Tab.Screen name="Inbox" component={Inbox} options={{headerShown:false}}/>
      <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
}

export default MainNav;