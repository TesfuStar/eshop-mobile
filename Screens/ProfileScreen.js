import { StyleSheet, Text, View,TouchableOpacity,Image,Dimensions } from 'react-native'
import React,{useContext} from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { AuthContext } from '../navigation/Authprovider'
import {useSelector} from 'react-redux'
const width =Dimensions.get('screen').width
const ProfileScreen = ({navigation}) => {
const{logout}=useContext(AuthContext)
const user=useSelector((state)=>state.user)
  return (
    <View style={styles.container}>
        <View style={styles.header}>
         <View style={{justifyContent:'flex-end',paddingTop:20,marginLeft:width-50}}>
            <TouchableOpacity onPress={()=>navigation.navigate('editProfile')}>
            <FontAwesome name='edit' size={28} color="white"/>

            </TouchableOpacity>
          </View>
          <View  style={{flexDirection:'row',alignItems:'center',marginTop:20,
          padding:15}}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          
          <Image source={require('../assets/pic-1.png')} style={{height:70,width:70,borderRadius:50}}/>
          <View style={{flexDirection:'column',paddingHorizontal:10}}>
          <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}>name</Text>
          <Text style={{fontSize:14,color:'white',fontWeight:'600'}}>email</Text>
          </View>
          </View>
          
          </View>
       </View>
      <View  style={styles.footer}>
          <View style={{flexDirection:'column'}}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',
          padding:15,borderBottomWidth:2,
        borderBottomColor:'rgb(3,105,161)'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <MaterialCommunityIcons name='message' size={20} color="rgb(3,105,161)"/>
             <Text style={{fontSize:17,color:'rgb(51,65,85)',fontFamily:'Roboto-Bold',padding:5}}>Messages</Text>
            </View>
              
              <TouchableOpacity>
                 <FontAwesome name='arrow-circle-right' color="rgb(3,105,161)" size={22}/>
            </TouchableOpacity>
           </View>
           <View  style={{flexDirection:'row',alignItems:'center',
           justifyContent:'space-between',padding:15,borderBottomWidth:2,
        borderBottomColor:'rgb(3,105,161)'}}>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                <FontAwesome name='reorder' size={20} color="rgb(3,105,161)"/>
             <Text style={{fontSize:17,color:'rgb(51,65,85)',fontFamily:'Roboto-Bold',padding:5}}>Orders</Text>
            </View>
              <TouchableOpacity>
              <FontAwesome name='arrow-circle-right' color="rgb(3,105,161)" size={22}/>
            </TouchableOpacity>

          </View>
          <View  style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',
          padding:15,borderBottomWidth:2,
        borderBottomColor:'rgb(3,105,161)'}}>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                <MaterialCommunityIcons name='logout' size={24} color="rgb(3,105,161)"/>
             <Text style={{fontSize:17,color:'rgb(51,65,85)',fontFamily:'Roboto-Bold',padding:5}}>Log Out</Text>
            </View>
              <TouchableOpacity onPress={()=>logout()}>
              <FontAwesome name='arrow-circle-left' color="rgb(3,105,161)" size={22}/>
            </TouchableOpacity>

          </View>
          </View>
             

      </View>
              
     </View>
  
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'rgb(3,105,161)'
  },
  header:{
    flex:1,
    backgroundColor:'rgb(3,105,161)',
  },
  footer:{
    flex:2,
    backgroundColor:'#fff',
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  }
})