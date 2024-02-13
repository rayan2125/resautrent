import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import colors from '../../assets/config/colors'
import { Icon } from 'react-native-paper'
import icons from '../../assets/config/icons'
import { useNavigation } from '@react-navigation/native'
import CustomButton from './customButton'
import { useDispatch } from 'react-redux'
import { removeFood } from '../../redux/Reducers/foodListingReducers'

const CustomListing = ({ foodName, foodPrice, source }) => {
const dispatch = useDispatch()
    const handleRemoveFoodList =()=>{
dispatch(removeFood())
    }
    return (
        <View style={{ flex: 1, }}>

            <View>
                <View style={{

                    elevation: 10,
                    zIndex: 10,
                    marginHorizontal: 10,
                    marginVertical: 10,
                    backgroundColor: colors.White, borderRadius: 15, paddingHorizontal: 20, paddingVertical: 20, marginTop: 20
                }}>
                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>

                        <TouchableOpacity
                        onPress={handleRemoveFoodList}
                        >
                            <Icon source={icons.delete} size={30} color={colors.red} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Image
                            source={source}
                            resizeMode='contain'
                            style={{ height: 100, width: 100,borderRadius:10 }} />
                        <View style={{ marginHorizontal: 20 }}>
                            <Text style={{ fontSize: 20, color: colors.textColor }}>{foodName}</Text>
                            <Text style={{ fontSize: 20, color: colors.textColor }}>{foodPrice}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>

                        <CustomButton
                            textColor={colors.textColor}
                            btnName="Offer"
                            borderColor={colors.Primary}
                            borderWidth={1}


                        />
                        <CustomButton
                            btnName="Ads"
                            textColor={colors.White}
                            backgroundColor={colors.Primary}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CustomListing

const styles = StyleSheet.create({})