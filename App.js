import * as React from 'react';
import { Alert, useEffect, useState, createContext, useContext } from 'react';
import { NavigationContainer, } from '@react-navigation/native';

import MainNav from './MainNav';
import SignUp1 from './screens/SignUp/SignUp1';
import SignUp2 from './screens/SignUp/SignUp3';
import ChatScreen from './components/inboxComps/ChatScreen';
import Login from './screens/login/Login';
import Home from './screens/Login-Signup/Home';
import CourtCardsScreen from './components/localComps/CourtCardsScreen';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AuthStack from './screens/AuthStack';
import { View, ActivityIndicator, } from 'react-native';



 const AuthenticatedUserContext = createContext({});

  const auth = getAuth();

  const AuthenticatedUserProvider = ({children}) => {
  
    const [user,setUser] = useState(null);
  
      return(
              <AuthenticatedUserContext.Provider value={{ user, setUser }}>
                {children}
              </AuthenticatedUserContext.Provider>
  
      )
  }
  


  function RootNavigator(){
   const { user, setUser } = useContext(AuthenticatedUserContext);
    const [loading,setLoading]  = useState(true);
  
    useEffect(() => {
     
      const unsubscribe = onAuthStateChanged( auth,
  
        async authenticatedUser => {
          authenticatedUser ? setUser( authenticatedUser ) : setUser(null);
          setLoading(false);
        });
        return ()=> unsubscribe();
    }, [user]);

if (loading) {
   return(
    <View style={{flex:1, justifyContent:'center',alignItems:'center',}}>
      <ActivityIndicator size="large"/>
    </View>
   )
  }

return (
      // <ChatScreen/>
      //<MainNav />
    //   
    // <Login/>
    // <SignUp2/>
    // <Home/>
    // <CourtCardsScreen/>
    
      <NavigationContainer >
        { user ? <MainNav/> : <AuthStack/> }
      </NavigationContainer>
   
  );

}

export default function App() {

 return(<AuthenticatedUserProvider> 
          <RootNavigator/>
        </AuthenticatedUserProvider>)

  
}