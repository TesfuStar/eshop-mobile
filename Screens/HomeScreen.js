import { StyleSheet, Text, View,ScrollView,ImageBackground ,Image,
    TextInput,TouchableOpacity,FlatList,Dimensions } from 'react-native'
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
  import Ionicons from 'react-native-vector-icons/Ionicons'
  import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {useSelector} from 'react-redux'

  import React, { useState,useEffect } from 'react'
  import {products} from '../Components/Data'

  const width=Dimensions.get('screen').width/2-20;
const HomeScreen = ({navigation}) => {
 const categorieData =[
    {
        id:1,
        image:require('../assets/hoodie.png'),
        name:"All",
  
      },
     
     
      {
        id:2,
        image:require('../assets/woman-clothes.png'),
        name:"womens",
      },
      {
        id:3,
        image:require('../assets/trousers.png'),
        name:"Men",
      },
     
      {
        id:4,
        image:require('../assets/baby-clothing.png'),
        name:"Kids",
      },
       {
        id:5,
        image:require('../assets/jacket.png'),
        name:"Shoes",
      },
       {
        id:6,
        image:require('../assets/hoodie.png'),
        name:"Watch's",
      },
 ]
const name=useSelector((state)=>state.user.name)

 const [ categories,setCategories]= useState(categorieData);
 const [selectedCategory,setSelectedCategory]= useState(categories[0]);
const renderItem=({item})=>{
    return(
        <TouchableOpacity style={{paddingHorizontal:5,paddingBottom:5,
           
             alignItems:'center',borderRadius:100,
            justifyContent:'center',marginHorizontal:10
         
            
            }}
            onPress={()=>setSelectedCategory(item)}
            >
            <View  style={{borderRadius:100,  alignItems:'center', justifyContent:'center',
            paddingHorizontal:10,paddingVertical:10, 
            backgroundColor:(selectedCategory?.id ==item.id)? 'rgb(3,105,161)' :'white',}}>
         <Image  source={item.image}  style={{height:20,width:20,borderRadius:15}} />
            </View>
         <Text style={{fontFamily:'Roboto-Medium',
         fontSize:16,color:(selectedCategory?.id == item.id)? 'white' : 'rgba(209,213,219,0.1)'}}>
              {item.name}</Text>
          </TouchableOpacity>
    )
}
// const[productItems,setProductItems]=useState([])

// useEffect(()=>{
//    const fakeDatas=async()=>{
//        const items = await fetch('https://fakestoreapi.com/products')
//        const datas = items.json()
//        setProductItems(datas)
//    }
//    fakeDatas()
// },[])

const Card=({item,product})=>{
    return(
        <TouchableOpacity activeOpacity={0.5} 
        onPress={()=>navigation.navigate('details',product)}>
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
        <Text style={{fontFamily:'Roboto-Bold',color:'rgb(3,105,161)',fontSize:16,}}>{product.name}</Text>
        <View style={{flexDirection:'row',alignContent:'center',justifyContent:'space-between'}}>
        <Text style={{fontFamily:'Roboto-Bold',color:'rgba(51,65,85,0.5)',
        fontSize:16,textDecorationLine:'line-through'}}>ETB{product.prev}</Text>
        <Text style={{fontFamily:'Roboto-Bold',color:'rgb(51,65,85)',
        fontSize:16,paddingHorizontal:5}}>ETB{product.price}</Text>

        </View> 
        </View>
        </TouchableOpacity>
    )
}

  return (
    <View
      
    style={styles.container}>
     <View style={styles.header}>
      
       <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:10,
       alignItems:'center',paddingHorizontal:10}}>
           <Text style={{color:'white',fontSize:15,fontFamily:'Roboto-Medium'}}>Hello,{name}</Text>
            <ImageBackground source={require('../assets/pic-1.png')}
              style={{height:35,width:35}}
            imageStyle={{borderRadius:50}}/>
       </View>

       <View style={{paddingHorizontal:15,width:'90%'}}>
           <Text style={{fontFamily:'Roboto-Bold',color:'white',fontSize:30}}>Find Cool Products Fits Your Choice</Text>
       </View>
       <View style={styles.searchcontainer}>
            <FontAwesome  name="search" size={18} color="rgb(3,105,161)" style={{marginRight:5}}/>
       <TextInput  placeholder='Search Products' />
        </View>
      
        <FlatList 
                  data={categories}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={renderItem}
                  contentContainerStyle={{paddingVertical:15}}
                  keyExtractor={item=>`${item.id}`}
                  />
     </View>
     <View style={styles.footer}>
      <View style={{padding:10}}>
          <Text style={{fontFamily:'Roboto-Bold',color:'rgb(3,105,161)',fontSize:23}}>Popular Products</Text>
         
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

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
     container:{
       flex:1,
        backgroundColor:'rgb(3,105,161)',
        position:'relative'
    },
    header:{
        flex:1.7,
        backgroundColor:'rgb(3,105,161)',
        //  borderBottomLeftRadius:20,
        //  borderBottomRightRadius:15
     },
     footer:{
        flex:2,
         backgroundColor:'rgba(255,255,255,0.9)',
         borderTopLeftRadius:20,
         borderTopRightRadius:20
         
     },
     searchcontainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        paddingHorizontal:10,
       
        marginHorizontal:20,
        borderRadius:3,
        backgroundColor:'#fff',
        marginVertical:5,
        zIndex:50,
        shadowColor: '#FAFAFA',
   shadowOffset: { width: 0, height: 1 },
   shadowOpacity: 0.3,
   shadowRadius: 1,  
   elevation: 1
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