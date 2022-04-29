import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen'
import EditprofileScreen from './EditprofileScreen';
import CartScreen from './CartScreen';

import FavoriteScreen from './FavoriteScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import CheckoutScreen from './CheckoutScreen'
import { useSelector } from 'react-redux'
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator()
const CartStack = createNativeStackNavigator()

const tabBarrVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  if (routeName == 'details') {
    return 'none'
  }
  if (routeName == 'editProfile') {
    return 'none'
  }
  if (routeName == 'checkout') {
    return 'none'
  }
  return 'flex'
}
const MaintabScreen = () => {
  const { cartQuantity } = useSelector(state => state.cart)
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: 'transparent', borderTopWidth: 0, elevation: 0 },
        tabBarInactiveTintColor: 'darkgray',
        tabBarActiveTintColor: 'rgb(3,105,161)',
      }}
    >
      <Tab.Screen
        options={({ route }) => ({
          tabBarStyle: { display: tabBarrVisibility(route) },
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),

        })}

        name="Home" component={HomeStackScreen} />

      <Tab.Screen
        name="Carts"
        component={CartStackScreen}

        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
          ),
          tabBarStyle: { display: tabBarrVisibility(route), },
          tabBarBadge: `${cartQuantity}`,
          tabBarBadgeStyle: { backgroundColor: '#FBBF24', alignItems: 'center', justifyContent: 'center' }
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={({ route }) => ({
          tabBarStyle: { display: tabBarrVisibility(route) },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-o" color={color} size={size} />
          )

        })}
      />

      <Tab.Screen name="Fevorite" component={FavoriteScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite-border" color={color} size={size} />
          )

        }}
      />

    </Tab.Navigator>
  )
}

export default MaintabScreen


const HomeStackScreen = ({ navigation, route }) => {

  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />

      <HomeStack.Screen name="details" component={DetailsScreen}
        options={{ headerShown: false }}
      />
      {/* <stack.Screen name="orders" component={OrderScreen}/> */}
    </HomeStack.Navigator>
  )
}
const CartStackScreen = () => {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="cart" component={CartScreen} options={{ headerShown: false }} />
      <CartStack.Screen name="checkout" component={CheckoutScreen} options={{ headerShown: false }} />
    </CartStack.Navigator>
  )
}


const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="profile" component={ProfileScreen} options={{ headerShown: false }} />
      <ProfileStack.Screen name="editProfile" component={EditprofileScreen} options={{ headerShown: false }} />
    </ProfileStack.Navigator>
  )
}
