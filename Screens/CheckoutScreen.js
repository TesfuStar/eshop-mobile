import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const CheckoutScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'rgba(51,65,85,0.1)' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 15 }}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}
          style={{
            backgroundColor: 'rgb(3,105,161)', width: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 50, height: 30
          }}>
          <FontAwesome5 name='long-arrow-left' size={18}
            style={{ color: 'white' }}
          />
        </TouchableOpacity>

      </View>

      <View style={{ padding: 5, alignItems: 'center', margin: 10 }}>
        <View style={{ padding: 5, alignItems: 'center', margin: 10 }}>

          <Text style={{ fontFamily: 'Roboto-Bold', color: 'rgb(51,65,85)', fontSize: 30 }}>Order Now</Text>
          <Text style={{ fontFamily: 'Roboto-Bold', color: 'rgb(51,65,85)', fontSize: 20 }}>Total:4000</Text>
        </View>

        <View style={{ margin: 5, width: '100%', paddingHorizontal: 5 }}>
          <TextInput placeholder='your name' keyboardType="email-address"
            style={{ backgroundColor: 'white', width: '100%', borderRadius: 4, paddingHorizontal: 15, fontSize: 15, }} />
        </View>
        <View style={{ margin: 5, width: '100%', paddingHorizontal: 5 }}>
          <TextInput placeholder='your number' keyboardType="email-address"
            style={{ backgroundColor: 'white', width: '100%', borderRadius: 4, paddingHorizontal: 15 }} />
        </View>
        <View style={{ margin: 5, width: '100%', paddingHorizontal: 5 }}>
          <TextInput placeholder='your address' keyboardType="email-address"
            style={{ backgroundColor: 'white', width: '100%', borderRadius: 4, paddingHorizontal: 15 }} />
        </View>
        <View style={{ margin: 5, width: '100%', paddingHorizontal: 5 }}>

          <TouchableOpacity
            activeOpacity={0.7} style={{
              backgroundColor: 'rgb(3,105,161)', alignItems: 'center',
              paddingVertical: 12, borderRadius: 4
            }}>
            <Text style={{
              fontFamily: 'Roboto-Bold',
              color: '#fff', fontSize: 15
            }}>Submit Order</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default CheckoutScreen

const styles = StyleSheet.create({})