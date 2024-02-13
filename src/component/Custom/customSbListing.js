import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import colors from '../../assets/config/colors'
import { Icon } from 'react-native-paper'
import icons from '../../assets/config/icons'



const CustomSbListing = ({ foodName, price, source, foodPlan }) => {


    return (
        <View style={{ flex: 1, }}>


            <View style={{

                elevation: 10,
                zIndex: 10,
                marginHorizontal: 10,
                marginVertical: 10,
                backgroundColor: colors.White, borderRadius: 15, paddingHorizontal: 20, paddingVertical: 20, marginTop: 20
            }}>



                <Text style={{ fontSize: 20, color: colors.textColor, position: 'absolute', top: 10, right: 20 }}>{price}</Text>
                <View>

                    <Image
                        source={source}
                        resizeMode='contain'
                        style={{ height: 100, width: 100, borderRadius: 10 }} />
                    <Text>{foodName}</Text>
                </View>

                <Text style={{ fontSize: 20, color: colors.textColor }}>{foodPlan}</Text>
                    <TouchableOpacity
                        style={{ position: "absolute", bottom: 10, right: 20, }}
                    //    onPress={}
                    >
                        {/* <Text style={{color:colors.textColor,fontSize:18,fontFamily:"Roboto", fontWeight:"500"}}>All..</Text> */}
                        <Icon source={icons.down} size={20} />
                    </TouchableOpacity>







            </View>
        </View>

    )
}

export default CustomSbListing

const styles = StyleSheet.create({})