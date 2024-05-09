import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-paper'

const CustomTextFeild = ({title,onPress,extra,color}) => {
   
  return (
    <View style={{paddingHorizontal:20,paddingVertical:20, backgroundColor:'white',borderRadius:10,zIndex:9,elevation:10,marginTop:10,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
      <View>
      <Text style={{color:"#2B2E35",fontSize: 18, fontWeight: "400",}}>{title}</Text>
      
      <Text style={{color:color}}>{extra}</Text>
    

      </View>
      
      <TouchableOpacity onPress={onPress}>
      <Icon source="greater-than" size={25}/>
      </TouchableOpacity>

    </View>
  )
}

export default CustomTextFeild

const styles = StyleSheet.create({})