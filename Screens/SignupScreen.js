import { View, Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import React, { useContext, useState } from 'react'
import Formbutton from '../Components/Formbutton'
import Forminput from '../Components/Forminput'
import { AuthContext } from '../navigation/Authprovider'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import * as Animatable from 'react-native-animatable';
const SignupScreen = ({navigation}) => {
  const [email,setEmail]=useState();
  const [user,setUser]=useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const{signup}=useContext(AuthContext)

  const handleUser=()=>{

  }
  return (
    
    <View  style={styles.container}>

<Text style={styles.account}>Create an account</Text>
<Forminput 
lableValue={user}
onChangeText={(userName) => setUser(userName)}
placeholderText="user name"
iconType="user"
autoCapitalize="none"
autoCorrect={false}

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
onChangeText={(password) => setPassword(password)}
placeholderText="Password"
iconType="user"
secureTextEntry={true}
/>
{password?.length <6 ? <Text>password length must be greaterthan 6</Text> : null}
<Formbutton 
buttonTitle="sign up"
onPress={ () => signup(email,password)}

/>


<TouchableOpacity style={styles.forgotbutton}
onPress={()=>navigation.navigate("LoginScreen")}
>
    <Text style={styles.navbuttontext}>already have an account?</Text>
</TouchableOpacity>
</View>
  )
}

export default SignupScreen

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
  account:{
  fontWeight:'bold',
  fontSize:22,
  color:'rgb(3,105,161)',
  fontFamily:'Roboto-Bold'
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
      marginVertical:35,
  },
  navbuttontext:{
      fontSize:18,
      fontWeight:'500',
      color:'#000005'
  }
})
