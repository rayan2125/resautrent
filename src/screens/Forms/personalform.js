import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-paper'
import CustomTextFeild from '../../component/customTextFeild'
import { useNavigation } from '@react-navigation/native'

const Personalform = () => {
    const navigation = useNavigation()
  return (
    <View style={{flex:1}}>
        <View style={{ top:20,paddingVertical:25,paddingHorizontal:25}}>
            <TouchableOpacity>
                <Icon source="less-than" color='black' size={20}/>
            </TouchableOpacity>
            <View style={{top:10}}>
                <Text style={{color:"black", fontSize:25,fontWeight:"400"}}>
                Personal documents
                </Text>
                <Text style={{color:"black", fontSize:16,marginTop:10,fontWeight:"400"}}>Upload focused photos of below documents for faster verification</Text>
                <View style={{gap:5, marginTop:10}}>
                    <CustomTextFeild
                    title="Aadhar Card"
                    onPress={()=>navigation.navigate("Adharcardform")}
                    />
                    <CustomTextFeild
                    title="PAN Card"
                    onPress={()=>navigation.navigate("PanCardForm")}
                    />
                    <CustomTextFeild
                    title="Driving License"
                    extra="(Optional for Ebike or cycle users)"
                    onPress={()=>navigation.navigate("DrivingLicenseForm")}

                    />
                </View>
            </View>
        </View>
      
    </View>
  )
}

export default Personalform

const styles = StyleSheet.create({})