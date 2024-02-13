import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../assets/config/colors'
// import { Icon } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome6'
import icons from '../../assets/config/icons'


const OrderCard = () => {
    return (
        <View style={{
            backgroundColor: colors.White,
            width:"30%",

            borderRadius: 15,
            paddingVertical: 25, paddingHorizontal: 25
        }}>

            <View style={{ flexDirection: "row", alignItems: "center", }}>

                <Text style={{ color: colors.green, fontSize: 36, fontWeight: "600" }}>04</Text>
                <View style={{ position: 'absolute', right: -20 }}>

                    <Icon

                        name="clock-rotate-left"
                        color={colors.green}
                        size={20}
                    />
                </View>
            </View>

            <Text style={{ color: colors.textColor, fontSize: 15, fontWeight: "700" }}>New</Text>
            <Text style={{ color: colors.textColor, fontSize: 15, fontWeight: "700" }}>Orders</Text>
            <View style={{
                backgroundColor: colors.green,
                position: 'absolute',
                bottom: -10,
                right: 40,
                borderRadius: 99, height: 20, width: 20, justifyContent: "center", alignItems: 'center'
            }}>
                <Icon name="greater-than" color='white' />
            </View>
        </View>
    )
}

export default OrderCard

const styles = StyleSheet.create({})