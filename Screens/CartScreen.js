import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useSelector, useDispatch } from 'react-redux'
import { removeProduct, increaseCart, decreaseCart } from '../redux/cartReducer'

const CartScreen = ({ navigation }) => {
  const cart = useSelector(state => state.cart)
  const dispach = useDispatch()

  const handleIncrease = (cartItem) => {
    dispach(increaseCart(cartItem))
  }
  const handleDecrease = (cartItem) => {
    dispach(decreaseCart(cartItem))
  }
  const handleRemove = (cartItem) => {
    dispach(removeProduct(cartItem))
  }
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}
      vertical={true} showsVerticalScrollIndicator={false}>
      <View style={{ alignItems: 'center', padding: 5 }} >
        <Text style={{ fontFamily: 'Roboto-Bold', color: 'rgb(3,105,161)', fontSize: 26 }}>My cart</Text>
      </View>



      {cart.cartItems?.map((cartItem, index) => (


        <View style={styles.container} key={index}>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
            <Image source={cartItem.img} style={{ height: 100, width: 100, resizeMode: 'cover', borderRadius: 10 }} />
            <View style={{ paddingLeft: 10, alignItems: 'flex-start' }}>
              <Text style={{ fontSize: 22, fontFamily: 'Roboto-Bold', color: "rgb(3,105,161)" }}>{cartItem.name}</Text>
              <Text style={{ fontSize: 17, fontFamily: 'Roboto-Medium', color: 'rgb(3,105,161)', paddingBottom: 2 }}>Br{cartItem.price}</Text>
              <View style={{
                flexDirection: 'row', alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <TouchableOpacity onPress={() => handleIncrease(cartItem)}
                  style={{
                    borderRadius: 30, alignItems: 'center', justifyContent: 'center',
                    width: 25, height: 25, backgroundColor: 'rgb(3,105,161)'
                  }}><Text style={{
                    fontSize: 15, fontWeight: 'bold',
                    paddingHorizontal: 5, color: 'white'
                  }}>+</Text></TouchableOpacity>

                <Text style={{
                  fontSize: 15, fontWeight: 'bold',
                  paddingHorizontal: 5, color: 'black'
                }}>{cartItem.cartQuantity}</Text>

                <TouchableOpacity onPress={() => handleDecrease(cartItem)}
                  style={{
                    borderRadius: 30, alignItems: 'center', justifyContent: 'center',
                    width: 25, height: 25, backgroundColor: 'rgb(3,105,161)'
                  }}><Text style={{
                    fontSize: 15, fontWeight: 'bold',
                    paddingHorizontal: 5, color: 'white'
                  }}>-</Text></TouchableOpacity>


              </View>
            </View>

          </View>

          <View style={{ marginRight: 10 }}>
            <TouchableOpacity onPress={() => handleRemove(cartItem)}>
              <MaterialIcons name='delete' size={26} color="crimson" />
            </TouchableOpacity>

          </View>


        </View>
      ))}
      {/* /SECOND PART */}
      <View style={styles.group}>
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: "black" }}>{cart.total}</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: "black" }}>TOTAL:{cart.cartTotalAmount}</Text>
        </View>
        <View style={{ paddingRight: 25, padding: 6 }}>
          <TouchableOpacity onPress={() => navigation.navigate('checkout')}
            style={{
              padding: 8, backgroundColor: 'rgb(3,105,161)', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10,
              justifyContent: "space-between", borderRadius: 10
            }}><Text style={{
              fontSize: 18, fontWeight: 'bold',
              paddingHorizontal: 5, color: 'white'
            }}>Checkout</Text>
            <MaterialIcons name='indeterminate-check-box' size={30} color="white" />
          </TouchableOpacity>


        </View>
      </View>
   {/* add coment */}

    </ScrollView>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10,
    borderRadius: 10,
    shadowColor: 'lightgray',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1
  },
  group: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  }
})