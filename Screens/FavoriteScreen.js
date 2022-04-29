import { StyleSheet, Text, View,ScrollView,ImageBackground ,Image,
    TextInput,TouchableOpacity,FlatList,Dimensions } from 'react-native'
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
  import Ionicons from 'react-native-vector-icons/Ionicons'
  import FontAwesome from 'react-native-vector-icons/FontAwesome'
  import React, { useState,useEffect } from 'react'
  import {products} from '../Components/Data'

  const width=Dimensions.get('screen').width/2-20;

const FavoriteScreen = ({navigation}) => {
    const Card=({item,product})=>{
        return(
            <TouchableOpacity activeOpacity={0.5} 
            onPress={()=>navigation.navigate('details',product)}
            >
            <View style={styles.card}>
                
            <View style={{alignItems:'flex-end'}}>
                <TouchableOpacity activeOpacity={0.5} style={{backgroundColor:'white',
                 width:30,alignItems:'center',
                justifyContent:'center',borderRadius:50,height:30
            }}>
                <MaterialIcons name='favorite' size={18} 
                style={{color:'red'}}
                />
                </TouchableOpacity>
              
            </View>
            <View style={{height:140,alignItems:'center'}}>
            <Image  source={product.img}  style={{flex:1,resizeMode:'contain'}} />
            </View>
            <Text style={{fontFamily:'Roboto-Bold',color:'#0C4A6E',fontSize:16}}>{product.name}</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontFamily:'Roboto-Bold',color:'lightgray',fontSize:16}}>Br{product.prev}</Text>
            <Text style={{fontFamily:'Roboto-Bold',color:'#0C4A6E',fontSize:16,paddingHorizontal:5}}>{product.price} Br</Text>
    
            </View> 
            </View>
            </TouchableOpacity>
        )
    }
  return (
    <View style={styles.container}>
      <View style={{alignItems:'center',padding:8}}>
          <Text style={{fontFamily:'Roboto-Bold',color:'#0C4A6E',fontSize:26}}>My Favorites</Text>
      </View>
      <FlatList 
                  data={products}
                  Vertical
                  numColumns={2}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item})=><Card  product={item}/>}
                  columnWrapperStyle={{justifyContent:'space-between'}}
                  contentContainerStyle={{paddingBottom:15,marginTop:10}}
                  />
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
         backgroundColor:'#fff'
     },
    card:{
        height:225,
        backgroundColor:'white',
        width,
        marginHorizontal:10,
        borderRadius:10,
        padding:15,
        marginBottom:20,
        shadowColor: '#FAFAFA',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,  
        elevation: 1
         }
})