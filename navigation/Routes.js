import React, { useState, useEffect,useContext } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { AuthContext } from './Authprovider';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack'
const Routes=()=> {
  const{user,setUser}=useContext(AuthContext)
  
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
    return (
      <NavigationContainer>
         {user ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    )
  
}

export default Routes