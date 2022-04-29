import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import {windowWidth,windwHeight} from '../Utils/Dimention'
import * as Animatable from 'react-native-animatable';

const Formbutton = ({buttonTitle,...rest}) => {
    return (
        
      <TouchableOpacity style={styles.buttoncontainer} {...rest} activeOpacity={0.7}>
     
        <Text  style={styles.buttontext}>{buttonTitle}</Text>
      
       </TouchableOpacity>
       
    )
}

export default Formbutton

const styles = StyleSheet.create({
    buttoncontainer:{
        marginTop:10,
        width:'100%',
        height:windwHeight / 15,
        backgroundColor:'rgb(3,105,161)',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
    },
    buttontext:{
        fontSize:18,
        fontWeight:'bold',
        color:'#fff',
        
    }
})
