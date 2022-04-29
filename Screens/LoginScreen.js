import { View, Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import React,{useState,useContext} from 'react'
import { AuthContext } from '../navigation/Authprovider'
import Formbutton from '../Components/Formbutton'
import Forminput from '../Components/Forminput'
import {windowWidth,windwHeight} from '../Utils/Dimention'
const LoginScreen = ({navigation}) => {
  const [email,setEmail]=useState();
  const [password, setPassword] = useState();
  const{login}=useContext(AuthContext);
  return (
    <View  style={styles.container}>
    <Image source={require('../assets/logo.png')}
    style={styles.logo}
    style={{height:120,width:280,padding:10}}
    />
    <Forminput 
    lableValue={email}
    onChangeText={(userEmail) => setEmail(userEmail)}
    placeholderText="Email"
    iconType="user"
    keyboardType="email-address"
    autoCapitalize="none"
    autoCorrect={false}
    />
    <Forminput 
    lableValue={password}
    onChangeText={(userPassword) => setPassword(userPassword)}
    placeholderText="Password"
    iconType="lock"
    secureTextEntry={true}
    />
    <Formbutton 
    buttonTitle="sign in"
    onPress={()=>login(email,password)}
    />
    <TouchableOpacity style={styles.forgotbutton}>
        <Text style={styles.navbuttontext}>Forgot password</Text>
        
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.createaccount}
     onPress={()=>navigation.navigate("SignupScreen")}
    >
        <Text style={styles.navtext}>don't have account create account?</Text>
    </TouchableOpacity>
</View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
      backgroundColor:'#f9fafd',
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      padding:20,
  },
  logo:{
      height:150,
      width:150,
      resizeMode:'cover',
  },
  text:{
      fontSize:28,
      marginBottom:10,
      color:'#051d5f',
  },
  navbutton:{
      marginTop:15
  },
  forgotbutton:{
      marginVertical:15,
  },
  
  navbuttontext:{
      fontSize:18,
      fontWeight:'500',
      color:'rgb(3,105,161)',
      fontFamily:'Roboto-Bold'
  },
  navtext:{
      fontSize:18,
      fontWeight:'500',
      color:'#000005',
      fontFamily:'Roboto-Regular'
  }
})
