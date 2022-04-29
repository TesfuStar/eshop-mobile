import { StyleSheet, Text, View,ScrollView,ImageBackground ,Image,
    TextInput,TouchableOpacity,FlatList,Dimensions } from 'react-native'
import React,{useState} from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome'
import {useDispatch} from 'react-redux'
import { addToCart } from '../redux/cartReducer'
const width=Dimensions.get('screen').width/4-20;
const DetailsScreen = ({navigation,route}) => {
    const dispach =useDispatch()
    const product=route.params;

    const handleAddProduct=(product)=>{
        dispach(addToCart(product))
    }
    const sizes=[
        {
            id:1,
            name:'S'
        },
        {
            id:2,
            name:'M'
        },
        {
            id:3,
            name:'L'
        },
        {
            id:4,
            name:'XL'
        }
    ]
    const [selected,setSelected]=useState(sizes[1])


    const renderSizes=({item})=>{
        return(
            <TouchableOpacity style={{paddingHorizontal:5,paddingBottom:5,
                 alignItems:'center',borderRadius:100,
                justifyContent:'center',marginHorizontal:2 }}
                onPress={()=>setSelected(item)}
                >
                <View  style={{borderRadius:30,  alignItems:'center', justifyContent:'center',
                width:30,height:30, 
                backgroundColor:(selected?.id ==item.id)? 'rgb(3,105,161)' :'white',}}>
            <Text style={{fontFamily:'Roboto-Bold',
             fontSize:16,color:(selected?.id == item.id)? 'white' : 'rgb(3,105,161)'}}>
                  {item.name}</Text>
                </View>
             
              </TouchableOpacity>
        )
    }
  return (
     <View style={styles.container}>
        <View style={styles.header}>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,paddingTop:15}}>
      <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.goBack()}
       style={{backgroundColor:'rgb(3,105,161)',width:30,alignItems:'center',justifyContent:'center',borderRadius:50,height:30
        }}>
            <FontAwesome5 name='long-arrow-left' size={18} 
            style={{color:'white'}}
            />
            </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={{backgroundColor:'rgb(3,105,161)',
             width:30,alignItems:'center',
            justifyContent:'center',borderRadius:50,height:30
        }}>
            <MaterialIcons name='favorite' size={18} 
            style={{color:'white'}}
            />
            </TouchableOpacity>
      </View>
      <View style={{flex:1,alignItems:'center',justifyContent:'center',marginVertical:10}}>
          <Image source={product.img} style={{flex:1,resizeMode:'contain'}}/>
      </View>
      </View>
      <View style={styles.footer}>
          <ScrollView 
          horizontal={false}

          >
      <View style={{flexDirection:'row',justifyContent:'space-between',padding:15}}>
          <Text style={{fontFamily:'Roboto-Bold',color:'#0C4A6E',fontSize:24}}>{product.name}</Text>
          <Text style={{fontFamily:'Roboto-Medium',color:'rgb(51,65,85)',fontSize:20}}>ETB{product.price}</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15,paddingVertical:5}}>
           <View >
          <MaterialIcons name='speaker-notes' size={20}style={{color:'rgb(3,105,161)'}} />
          </View>
          <View style={{paddingHorizontal:8}}>
          <Text style={{fontFamily:'Roboto-Bold',color:'rgb(51,65,85)',fontSize:20}}>Details</Text>
          </View>
         
        </View>
        <View style={{paddingHorizontal:20}}>
        <Text style={{fontFamily:'Roboto-Regular',color:'rgb(148,163,184)',fontSize:15}}>{product.discription}</Text>
        </View>


        <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15,paddingVertical:10}}>
           <View >
          <MaterialIcons name='speaker-notes' size={20}style={{color:'rgb(3,105,161)'}} />
          </View>
          <View style={{paddingHorizontal:8}}>
          <Text style={{fontFamily:'Roboto-Bold',color:'rgb(51,65,85)',fontSize:17}}>Size Item</Text>
          </View>
         
        </View>
        <FlatList 
                  data={sizes}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={renderSizes}
                  contentContainerStyle={{paddingVertical:10}}
                  keyExtractor={item=>`${item.id}`}
                  />
                  <View style={{marginHorizontal:25,marginBottom:20}}>
                      <TouchableOpacity onPress={()=>handleAddProduct(product)}
                      activeOpacity={0.7} style={{backgroundColor:'rgb(3,105,161)',alignItems:'center',
                      paddingVertical:12,borderRadius:4}}>
                      <Text style={{fontFamily:'Roboto-Bold',
                      color:'#fff',fontSize:15}}>Add to Cart</Text>
                      </TouchableOpacity>
                      
                  </View>
     </ScrollView>
      </View>
      
      
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        flex:2,
         backgroundColor:'#fff',
      
     },
     footer:{
        flex:2,
         backgroundColor:'#fff',
         borderTopLeftRadius:20,
         borderTopRightRadius:20
         
     },
  
})