import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../../assets/config/colors'
import NormalOrder from '../../pages/order.js/normalOrder'
import SubscriptionOrder from '../../pages/order.js/subscriptionOrder'

const Tab = () => {
    const [bgcolor,setBgColor] = useState(0)
   
    const handlechange=(item)=>{
        setBgColor(item)
    }
  return (
    <View style={{margin:10,flex:1}}>
    <View style={{backgroundColor:colors.Primary, 
        borderRadius:20,
        paddingHorizontal:10,paddingVertical:10,flexDirection:"row",alignItems:'center',justifyContent:"space-between"}}>
       <TouchableOpacity
       onPress={()=>handlechange(0)}
       style={{backgroundColor:bgcolor===0?colors.White:colors.Primary, width:"50%", borderRadius:20,alignItems:"center", paddingVertical:5,}}
       >
        <Text>Normal Order</Text>
       </TouchableOpacity>
       <TouchableOpacity
       onPress={()=>handlechange(1)}
       style={{backgroundColor:bgcolor===1?colors.White:colors.Primary, width:"50%", borderRadius:20,alignItems:"center", paddingVertical:5,}}
       >
        <Text>Subscription Order</Text>
       </TouchableOpacity>
       
    </View>
       {
        bgcolor===0 ? <NormalOrder/>:
        bgcolor===1 ?<SubscriptionOrder/>:[]
       }
    </View>
  )
}

export default Tab

const styles = StyleSheet.create({})