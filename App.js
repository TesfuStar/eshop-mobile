import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import Routes from './navigation/Routes';

import { Authprovider } from './navigation/Authprovider';
const App = () => {
  return (
   
  <Authprovider>
    <Routes />
  </Authprovider>

   
  )
}

export default App

const styles = StyleSheet.create({})