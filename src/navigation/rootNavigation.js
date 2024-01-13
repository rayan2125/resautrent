import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';


const Stack = createStackNavigator();
const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={Home} />
    {/* <Stack.Screen name="Notifications" component={Notifications} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} /> */}
  </Stack.Navigator>

  )
}

export default RootNavigation

