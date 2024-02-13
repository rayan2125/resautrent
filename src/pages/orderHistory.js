import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../component/header'
import Tab from '../component/Tab/tab'

const OrderHistory = () => {
  return (
   <>
   <Header/>
   <View style={{flex:1}}>
    <Tab/>
   </View>
   </>
  )
}

export default OrderHistory

const styles = StyleSheet.create({})