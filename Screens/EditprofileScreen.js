import { StyleSheet, Text, View,TouchableOpacity ,Image,TextInput} from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { useTheme } from 'react-native-paper'
import { update } from '../redux/userReducer'
import { useDispatch } from 'react-redux'
import ImagePicker from 'react-native-image-crop-picker';
const EditprofileScreen = ({navigation}) => {
const[image,setImage]=useState(require('../assets/images/profile.png'))
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const dispach=useDispatch()
    bs = React.createRef();
    fall = new Animated.Value(1);
    const {colors} = useTheme();
const takePhoto=()=>{
    return(
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
            setImage(image.path)
            this.bs.current.snapTo(1)
          })
    )
}
const choosePhoto=()=>{
    return(
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
            setImage(image.path)
            this.bs.current.snapTo(1)
          })
    )
}

    renderInner = () => (
        <View style={styles.panel}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.panelTitle}>Upload Photo</Text>
            <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
          </View>
          <TouchableOpacity style={styles.panelButton}  onPress={takePhoto}>
            <Text style={styles.panelButtonTitle}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.panelButton}  onPress={choosePhoto}>
            <Text style={styles.panelButtonTitle}>Choose From Library</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.panelButton}
            onPress={() => this.bs.current.snapTo(1)}>
            <Text style={styles.panelButtonTitle}>Cancel</Text>
          </TouchableOpacity>
        </View>
      );
    
      renderHeader = () => (
        <View style={styles.headers}>
          <View style={styles.panelHeader}>
            <View style={styles.panelHandle} />
          </View>
        </View>
      );
      const handleUpdate=()=>{
        dispach(update({name,email}))
        setEmail('')
        setName('')
      }
  return (
    <View style={styles.container}>
  <BottomSheet
        ref={this.bs}
        snapPoints={[330, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
    <Animated.View  style={{   flex:1,
        backgroundColor:'rgb(3,105,161)',opacity:Animated.add(0.3,Animated.multiply(this.fall,1.0))}}>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:15}}>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
        <FontAwesome name='long-arrow-left' size={28} color="white"/></TouchableOpacity>  
    <Text style={{fontSize:16,color:'#ffff',fontFamily:'Roboto-Bold'}}>Edit Profile</Text>
    <TouchableOpacity onPress={handleUpdate}>
      <Ionicons name='ios-save' size={28} color="white"/></TouchableOpacity>  
      </View>
      <View style={{alignItems:'center'}}>
        <TouchableOpacity  onPress={() => this.bs.current.snapTo(0)}>
        <Image source={image} style={{height:90,width:90,borderRadius:50}}/>

        </TouchableOpacity>
      </View>

    </Animated.View>
     <Animated.View style={{    flex:2,
        backgroundColor:'#fff',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        opacity:Animated.add(0.1,Animated.multiply(this.fall,1.0))}}>
       <View>
       <View style={styles.searchcontainer}>
       <FontAwesome  name="user" size={18} color='rgb(3,105,161)'style={{marginRight:5}}/>
       <TextInput  placeholder='user name' onChange={(e)=>e.target.Value}/>
       </View>
       <View style={styles.searchcontainer}>
       <MaterialIcons  name="email" size={18} color='rgb(3,105,161)'style={{marginRight:5}}/>
       <TextInput  placeholder='email' onChange={(e)=>e.target.Value}  keyboardType="email-address"/>
       </View>
       {/* <View style={styles.searchcontainer}>
       <FontAwesome  name="phone" size={20} color='#0C4A6E'style={{marginRight:5}}/>
       <TextInput  placeholder='phone number'/>
       </View> */}
       
       </View>

   </Animated.View>
 </View>
  )
}

export default EditprofileScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgb(3,105,161)'
      },
    //   header:{
    //     flex:1,
    //     backgroundColor:'#0C4A6E',
    //   },
    //   footer:{
    //     flex:2,
    //     backgroundColor:'#fff',
    //     borderTopLeftRadius:20,
    //     borderTopRightRadius:20,
    //     opacity:Animated.add(0.1,Animated.multiply(this.fall,1.0))
    //   },

  searchcontainer:{
    flexDirection:'row',
    alignItems:'center',
    borderBottomColor:'rgb(3,105,161)',
    borderBottomWidth:2,
    paddingHorizontal:10,
    // paddingVertical:5,
    marginHorizontal:20,
    borderRadius:5,
    backgroundColor:'#fff',
    marginVertical:5,
},
commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: 'rgb(3,105,161)',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
headers: {
//   backgroundColor: '#0C4A6E',
  shadowColor: '#333333',
  shadowOffset: {width: -1, height: -3},
  shadowRadius: 2,
  shadowOpacity: 0.4,
  // elevation: 5,
  paddingTop: 20,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
},
panelHeader: {
  alignItems: 'center',
},
panelHandle: {
  width: 40,
  height: 8,
  borderRadius: 4,
//   backgroundColor: 'red',
  marginBottom: 10,
},
panelTitle: {
    fontSize: 27,
    height: 35,
    color:'white'
  },
  panelSubtitle: {
    fontSize: 14,
    color:'white',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'rgb(3,105,161)',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
})