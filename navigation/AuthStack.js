import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import OnboardingScreen from '../Screens/OnboardingScreen'
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator options={{headerShown: false}}>
    <Stack.Screen  name="Onboarding" component={OnboardingScreen} options={{headerShown: false}}/>
    <Stack.Screen  name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
   
    <Stack.Screen  name="SignupScreen" component={SignupScreen} options={{headerShown: false}} />
   </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})