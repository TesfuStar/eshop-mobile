import React from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import {windowWidth,windwHeight} from '../Utils/Dimention'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const Forminput = ({lableValue,placeholderText,iconType,...rest}) => {
    return (
        <View style={styles.inputcontainer}>
            <View style={styles.iconstyle}>
                <Feather name={iconType} size={17}  color={"#666"}/>
            </View>
        <TextInput 
        value={lableValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
        
        
        />
        
         </View>
    )
}

export default Forminput


const styles = StyleSheet.create({
    inputcontainer:{
        marginTop:15,
        // marginBottom:2,
        width:'100%',
        height:windwHeight / 15,
        borderColor:"#ccc",
        backgroundColor:'#000',
        
        borderWidth:1,
        alignItems:'center',
        flexDirection:'row',
       backgroundColor:'#fff'
    },
    iconstyle:{
      padding:7,
      height:'100%',
      justifyContent:'center',
      alignItems:'center',
      borderRightColor:'#ccc',
      borderRightWidth:1,
      width:45,
    },
    input:{
        padding:10, 
        flex:1,
        fontSize:16,
        color:'#333',
        justifyContent:'center',
        alignItems:'center',
    },
    inputfield:{
        padding:10,
        marginTop:10,
        marginBottom:10,
        width:windowWidth /1.5,
        height:windwHeight/15,
        fontSize:16,
        borderRadius:8,
        borderWidth:1,
    }
})
