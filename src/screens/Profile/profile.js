import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../assets/config/colors'
import LinearGradient from 'react-native-linear-gradient'
import { Icon } from 'react-native-paper'
import icons from '../../assets/config/icons'

const Profile = () => {
    return (
        <>
            <LinearGradient colors={["#027F25", "#027F90"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                style={{ marginBottom: 10, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, height: '30%', justifyContent: 'center' }}>
            </LinearGradient >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',backgroundColor:'red' }}>

                <View style={{ backgroundColor: colors.green, height: 100, width: "30%", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: colors.White, height: 50, width: 50, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon source={icons.bank} size={25} />
                    </View>
                </View>
                <View style={{ backgroundColor: colors.green, height: 100, width: "30%", borderRadius: 10,justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: colors.White, height: 50, width: 50, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon source={icons.bank} size={25} />
                    </View>
                </View>
                <View style={{ backgroundColor: colors.green, height: 100, width: "30%", borderRadius: 10,justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: colors.White, height: 50, width: 50, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon source={icons.bank} size={25} />
                    </View>
                </View>
                <View>
                    {/* <Text>Profile</Text> */}
                </View>
            </View>
        </>
    )
}

export default Profile

const styles = StyleSheet.create({})