import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../assets/config/colors'

const AfterRegistration = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{}}>
        <LinearGradient colors={["#FF8A00", "#FF5C00"]} style={{

          paddingHorizontal: 25, paddingHorizontal: 25, height: 200, borderBottomLeftRadius: 40, borderBottomRightRadius: 40
        }}>
          <Text style={{ top: 50, fontSize: 28, color: "#F8F0E3", fontWeight: '400' }}>
            Welcome To Click2Bite
          </Text>
          <Text style={{ top: 65, fontSize: 16, color: "#F8F0E3", fontWeight: '400' }}>
            Just a few steps to complete and then you can start earning with Us
          </Text>
        </LinearGradient>
      </View>
      <View style={{flex:1, paddingHorizontal: 25, paddingHorizontal: 25, alignSelf:"center",justifyContent:"center",alignItems:"center" }}>
        <View style={{  height: 100, width: 100, alignItems: "center", alignSelf: "center",justifyContent:"center",bottom:50 }}>
         <Image source={require("../assets/images/pending.png")} style={{height:150,width:150}}/>
        </View>
        <View style={{alignItems:"center"}}>
          <Text style={{ color: colors.textColor, fontWeight: "500", fontSize: 20 }}>Pending  Approval</Text>
          <Text style={{ color: colors.textColor, fontWeight: "500", fontSize: 20 }}>Your Request Succesfully</Text>
        </View>
        <View>
          <Text style={{ color: colors.textColor, fontWeight: "500", fontSize: 20 }}>Please Wait for Approval 5 Days</Text>
          {/* <Text style={{ color: colors.textColor, fontWeight: "500", fontSize: 20 }}>Your Request Succesfully</Text> */}
        </View>
      </View>


    </View>
  )
}

export default AfterRegistration

const styles = StyleSheet.create({})