import React from 'react';
import {TouchableOpacity,StyleSheet, Text,Image, View,} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper'
import LoginScreen from './LoginScreen';

const OnboardingScreen = ({navigation}) => {
  return (
  
    <Onboarding 
    onSkip={()=>navigation.navigate("LoginScreen")}
    onDone={()=>navigation.navigate("LoginScreen")}
    titleStyles={{fontFamily:'Roboto-Bold'}}
    subTitleStyles={{fontFamily:'Roboto-Medium'}}
    imageContainerStyles={{paddingBottom:20}}
        pages={[
            {
               backgroundColor:'#3B82F6',
               image:<Image source={require('../assets/mobile.png')} style={{height:280,width:200}}/>,
               title:'Easy Shoping',
               subtitle:'Buy by your Phone'     
            },
            {
                backgroundColor:'#0891B2',
                image:<Image source={require('../assets/delivery.png')}  style={{height:250,width:200}}/>,
                title:'Free Delivery',
                subtitle:'Free delivery whereever in Addis'     
             },
             {
              backgroundColor:'rgb(3,105,161)',
              image:<Image source={require('../assets/onboard.png')}  style={{height:250,width:200}} />,
              title:'Get Started Now',
              subtitle:'done with'     
           }
        ]}
        
        />
     
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({})