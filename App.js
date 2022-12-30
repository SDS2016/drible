import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNav from './MainNav';
import ChatScreen from './components/inboxComps/ChatScreen';
import Login from './screens/login/Login';
import CourtCard from './components/localComps/CourtCardsScreen';
import Home from './screens/Login-Signup/Home';
import CourtCardsScreen from './components/localComps/CourtCardScreen.js';
// import ChatScreen from './components/inboxComps/ChatScreen';



export default function App() {
  return (
      // <ChatScreen/>
    // 
    // <Home/>
    // <Login/>
    // <CourtCardsScreen/>
    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
    
  );
}