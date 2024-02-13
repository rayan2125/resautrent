import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderHistoryCard from '../../component/order/orderHistoryCard'

const SubscriptionOrder = () => {
  const data = [1, 2,3, 4,5, 6, 7 , 8]
  return (
    <View 
     style={{flex:1}}
     >
        <FlatList
        style={{backgroundColor:"white"}}
        data={data}
        renderItem={({item,index})=>{
            return(

                <OrderHistoryCard/>
            )
        }}/>
    </View>
  )
}

export default SubscriptionOrder

const styles = StyleSheet.create({})