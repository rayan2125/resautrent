import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../assets/config/colors'
import { Icon } from 'react-native-paper'
import icons from '../../assets/config/icons'
// import Icon from 'react-native-vector-icons/FontAwesome6'
// import icons from '../../assets/config/icons'


const OrderCard = ({ title, textColor,source }) => {
    return (
        <View style={{
            elevation:10,
            backgroundColor: colors.White,
            width: "30%",
            alignItems: 'center',
            borderRadius: 15,
            paddingVertical: 25, paddingHorizontal: 15
        }}>






            <View style={{
                height: 30, width: 30, borderRadius: 100, backgroundColor:colors.green
                // backgroundColor: title === "Today" ? colors.green
                //     : title === "Pending" ? colors.Primary :"#FF3A10"
                , position: 'absolute', right: -10, zIndex: 9, top: -10, justifyContent: 'center', alignItems: "center", borderColor: colors.White, borderWidth: 1
            }}>
                <Text style={{ color: colors.White, fontSize: 10, top: -1,fontWeight:'900', }}>13</Text>



            </View>
            <View style={{top:-10,
                height: 55, width: 55, borderRadius: 100, 
                backgroundColor: title === "Today" ? colors.green
                    : title === "Pending" ? colors.Primary :"#FF3A10"
                ,
                // backgroundColor: colors.green,
                justifyContent: 'center', alignItems: "center", borderColor: colors.White, borderWidth: 1
            }}>
                < Icon source={source} color={colors.White} size={25}/>



            </View>

            <Text style={{ color: textColor, fontSize: 10, fontWeight: "700",top:0 }}>{title} Order</Text>
            <TouchableOpacity style={{top:10}}>
                <Text style={{fontSize:10,color:colors.textColor,fontWeight:'500'}}>Tab View</Text>
            </TouchableOpacity>
            {/* <Text style={{
                color: title === "New" ? colors.green
                    : title === "Pending" ? colors.Primary : colors.red, fontSize: 12, fontWeight: "700"
            }}>Order</Text> */}

        </View>
    )
}

export default OrderCard

const styles = StyleSheet.create({})