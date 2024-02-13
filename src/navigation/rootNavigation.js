import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Login from '../screens/Auth/login';
import Register from '../screens/Auth/register';
import Otp from '../pages/otp';
import OrderHistory from '../pages/orderHistory';
import FoodListingScreen from '../screens/foodListingScreen';
import FoodListingForm from '../pages/foodListing';
import Subcription from '../screens/subcription';
import ManageSubcription from '../pages/manageSubcription';
import OrderCancel from '../screens/orderCancel';
import { useSelector } from 'react-redux';
import Trending from '../screens/trendind';
import SlashScreen from '../screens/slashScreen';



const Stack = createStackNavigator();
const RootNavigation = () => {
  const selector = useSelector(state => state.auth.authData)


  let suffleScreen = selector === null ? 'Login' : 'Home'
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SlashScreen">
      <Stack.Screen name='SlashScreen' component={SlashScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Otp' component={Otp} />
      <Stack.Screen name='OrderHistory' component={OrderHistory} />
      <Stack.Screen name='FoodListingScreen' component={FoodListingScreen} />
      <Stack.Screen name="FoodListingForm" component={FoodListingForm} />
      <Stack.Screen name='Subcription' component={Subcription} />
      <Stack.Screen name='ManageSubcription' component={ManageSubcription} />
      <Stack.Screen name='OrderCancel' component={OrderCancel} />
      <Stack.Screen name='Trending' component={Trending} />
    </Stack.Navigator>

  )
}

export default RootNavigation

