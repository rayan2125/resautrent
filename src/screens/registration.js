import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import CustomTextFeild from '../component/Custom/customTextFeild'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const Registration = ({ route }) => {
    const selector = useSelector(state => state.registrationForm)

    let confirmdata = 'Approved'



    const [status, setStatus] = useState({
        personalInfo: '',
        personalDoc: '',
        bankDetail: '',
        restoDetail: ''
    })
    const navigation = useNavigation()

    useEffect(() => {
        if (selector) {
            setStatus(previous => ({
                ...previous,
                personalInfo: selector.personalInfo,
                personalDoc: selector.personalDoc,
                bankDetail: selector.bankDetail,
                restoDetail: selector.restoDetail,
            }))

        }

    }, [])

   
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
                    <CustomTextFeild title="Personal Information"
                        onPress={() => navigation.navigate("PersonalInfo")}
                        extra={status.personalInfo === undefined ? "" : confirmdata}
                        color="green"
                    />
                    <CustomTextFeild title="Personal Documents"
                        onPress={() => navigation.navigate("PersonalDoc")}
                        extra={status.personalDoc === undefined ? "" : confirmdata}
                        color="#FF8A00"
                    />
                    <CustomTextFeild title="Bank Account Details"
                        onPress={() => navigation.navigate("Bankform")}
                        color="green"
                        extra={status.bankDetail === undefined ? "" : confirmdata}
                    />
                    <CustomTextFeild title="Restaurant Details"
                        onPress={() => navigation.navigate("RestoDetail")}
                        color="green"
                        extra={status.restoDetail === undefined ? "" : confirmdata}
                    />
                </View>
            </View>



        </View>
    )
}

export default Registration

const styles = StyleSheet.create({})