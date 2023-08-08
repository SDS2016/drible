import * as React from 'react';
import { Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Local from './screens/Local';
import Activity from './screens/Activity';
import Inbox from './screens/Inbox';
import Profile from './screens/Profile';

import CourtCardsScreen from './components/localComps/CourtCardsScreen';
import ProfileSettings from './components/profileComps/ProfileSettings';
import FriendsListInvite from './components/localComps/FriendsListInvite';



import SignUp1 from './screens/SignUp/SignUp1';
import ChatScreen from './components/inboxComps/ChatScreen';
import MessageProfilePic from './components/inboxComps/MessageProfilePic';
import BackButton from './screens/button-etc/BackButton';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const getRouteName = route => {
//   const routeName = getFocusedRouteNameFromRoute(route);
//   if (routeName?.includes('CourtCardsScreen') || routeName?.includes('ProfileSettings') ){
//   return 'none';
//   }
//   return 'flex';
// }





function LocalStack() {



  return (
    <Stack.Navigator
      // initialRouteName="Home"
         screenOptions={{
          headerShown:false
          
      }}
     >
        <Stack.Screen
       
        name="LocalStack"
        component={Local}
      />
      
      {/* <Stack.Screen

        name="CourtCardsScreen"
        component={CourtCardsScreen}
        // options={{
          
        //   headerLeft:()=>(<BackButton/>),


        // }}
      /> */}
    </Stack.Navigator>
  );
}



function ActivityStack() {
  return (
    <Stack.Navigator
      // initialRouteName="Home"
      screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen
        name="ActivityStack"
        component={Activity}
        // options={{ title: 'Home Page' }}
      />
    </Stack.Navigator>
  );
}



function InboxStack() {
  return (
    <Stack.Navigator
      // initialRouteName="Home"
      
      screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen
        name="InboxStack"
        component={TabNav}
        // options={{ title: 'Home Page' }}
      />

      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}

        options={{ 
          headerShown:true, 
          headerStyle: { 
            backgroundColor: 'black',
           
           height:130,
          //  borderBottomColor:"#121212",
          //  borderBottomWidth:.9,#868686

          shadowColor: "#fff",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity:  0.1,
          shadowRadius: 19.05,
          elevation:3
        },
          headerBackTitleVisible:false,
          headerTitle:true,
          headerTintColor:"white",
          headerLargeStyle:true,
          title: <MessageProfilePic/>,
          headerShown:true,
          headerTitleStyle:{
            fontSize:20,
            color:"white",
            
          }
        
        }}
      />
      <Stack.Screen
        name="ProfileSettings"
        component={ProfileSettings}
       options={{ 
       headerStyle: { backgroundColor: 'black',},
       headerBackTitleVisible:false,
       headerTitle:true,
       headerTintColor:"white",
       headerLargeStyle:true,
       title: 'Profile Settings',
       headerShown:true,
       presentation:"modal",
       
       gestureResponseDistance:800,
       
      //  headerMode:"none",
     
       headerTitleStyle:{
        fontSize:25,
       }
       
       
        
      }}/>
      <Stack.Screen

        name="CourtCardsScreen"
        component={CourtCardsScreen}
        // options={{
          
        //  mode:'modal',


        // }}
        />
         <Stack.Screen

          name="FriendsListInvite"
          component={FriendsListInvite}
          options={{
            headerShown:false,
            presentation:"modal",
             
          }}
          />
    </Stack.Navigator>

    
    
  );
}



function ProfileStack({}) {

  return (
    <Stack.Navigator
      // initialRouteName="Home"
       >
        <Stack.Screen
        
        name="ProfileStack"
        component={Profile}
        options={{  headerShown:false }}
      />
      {/* <Stack.Screen
        name="ProfileSettings"
        component={ProfileSettings}
       options={{ 
       headerStyle: { backgroundColor: 'black',},
       headerBackTitleVisible:false,
       headerTitle:true,
       headerTintColor:"white",
       headerLargeStyle:true,
       title: 'Profile Settings',
       headerShown:true,
       presentation:"modal",
       gestureResponseDistance:800,
       
      //  headerMode:"none",
     
       headerTitleStyle:{
        fontSize:25,
       }
       
       
        
      }}
      /> */}
    </Stack.Navigator>
  );
}


function TabNav () {
return(
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
        paddingBottom:40,
      },
      }}
    >
      
      <Tab.Screen 
      name="Local" 
      component={LocalStack} 
      options={{
        // ({route})=> ({tabBarStyle:{ display: getRouteName(route)}}),
      headerShown:false,
      tabBarIcon: ({ color}) => 
      (<Image style={{height:28, width:28, tintColor:color, resizeMode:'contain' }}source={require('./assets/local.png')}/>)
      
      }}/>
      <Tab.Screen 
      name="Activity" 
      component={ActivityStack} 
      options={{
      headerShown:false, 
      tabBarIcon: ({ color}) => 
      (<Image style={{height:28, width:28, tintColor:color, resizeMode:'contain'}}source={require('./assets/activity.png')}/>),
     
        }} />
      <Tab.Screen 
      name="Inbox" 
      component={Inbox} 
      options={{
      headerShown:false,
      tabBarIcon: ({ color}) => 
      (<Image style={{height:30, width:30, tintColor:color ,resizeMode:'contain'}}source={require('./assets/inbox.png')}/>),
      
      }}/>
      <Tab.Screen 
      name="Profile" 
      component={ ProfileStack} 
      options={{
      headerShown:false,
      tabBarIcon: ({ color}) => 
      (<Image style={{height:28, width:28, tintColor:color ,resizeMode:'contain'}}source={require('./assets/profile.png')}/>),
      
      
      }}/>
      
    </Tab.Navigator>

);
}


const MainNav= () => {


  return (
    <InboxStack/>
  );
}

export default MainNav;