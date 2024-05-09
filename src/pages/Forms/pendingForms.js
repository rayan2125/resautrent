import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import CustomForm from '../../component/customForm'
import { TextInput } from 'react-native-paper'
import CustomTextFeild from '../../component/customTextFeild'
import { useNavigation } from '@react-navigation/native'

const PendingForms = ({ route }) => {
  console.log("checking what is route", route)
  const status = route.params
  const navigation = useNavigation()
  const handleNavigation = () => {

  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{}}>
        <LinearGradient colors={["#FF8A00", "#FF5C00"]} style={{

          paddingHorizontal: 25, paddingHorizontal: 25, height: 200, borderBottomLeftRadius: 40, borderBottomRightRadius: 40
        }}>
          <Text style={{ top: 50, fontSize: 28, color: "#F8F0E3", fontWeight: '400' }}>
            Welcome to Click2Bite
          </Text>
          <Text style={{ top: 65, fontSize: 16, color: "#F8F0E3", fontWeight: '400' }}>
            Just a few steps to complete and then you can start earning with Us
          </Text>
        </LinearGradient>
      </View>
      <View style={{ paddingHorizontal: 25, paddingHorizontal: 25, top: 20 }}>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "400" }}>Pending Documents</Text>
          <CustomTextFeild title="Personal Information"
            onPress={() => navigation.navigate("Forms")}
            extra={status === 1 ? "Approved" : ""}
            color="green"
          />
          <CustomTextFeild title="Personal Documents"
            onPress={() => navigation.navigate("Personalform")}
            extra="Verification Pending"
            color="#FF8A00"

          />
          <CustomTextFeild title="Vehicle Details"
            onPress={() => navigation.navigate("Vehicleform")}
            color="green"
            extra="Approved"

          />
          <CustomTextFeild title="Bank Account Details"
            onPress={() => navigation.navigate("Bankform")}
            color="green"
            extra="Approved"
          />

          <CustomTextFeild title="Dashboard"
            onPress={() => navigation.navigate("Home")}
            color="green"
            extra="Approved"
          />
        </View>
      </View>


    </View>
  )
}

export default PendingForms

const styles = StyleSheet.create({})