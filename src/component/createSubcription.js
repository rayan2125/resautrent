import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import colors from '../assets/config/colors'
import { Icon } from 'react-native-paper'
import icons from '../assets/config/icons'
import { useNavigation } from '@react-navigation/native'
import CustomButton from './Custom/customButton'
import { useDispatch } from 'react-redux'
import { removeFood } from '../redux/Reducers/foodListingReducers'

const CreateSubcription = ({ foodName, foodPrice, select, onPress, source }) => {
    // console.log("checking what is coming inside of select",select)
    const dispatch = useDispatch();


    const handleRemoveFoodList = () => {
        dispatch(removeFood());
    };


    return (
        <>
            <View style={{ width: "33.33%" }}>
                <TouchableOpacity
                    onPress={onPress}
                    style={{
                        alignItems: "center",
                        elevation: 10,
                        zIndex: 10,
                        marginHorizontal: 10,
                        marginVertical: 10,
                        backgroundColor: colors.White,
                        borderRadius: 15,
                        paddingHorizontal: 20,
                        paddingVertical: 20,
                        marginTop: 20,
                    }}
                >

                    <Image
                        source={source}
                        resizeMode="contain"
                        style={{ height: 50, width: 50, borderRadius: 15, }}
                    />

                    <View style={{ alignItems: "center" }}>
                        <Text style={{ color: colors.textColor }}>{foodName}</Text>
                        <Text style={{ fontSize: 20, color: colors.textColor }}>{foodPrice}Rs</Text>
                    </View>
                </TouchableOpacity>
                {select && (
                    <View style={{
                        position: 'absolute', height: 20, width: 20,
                        zIndex: 99,
                        alignItems: 'center',
                        justifyContent: "center",
                        backgroundColor: colors.green, borderRadius: 100, top: 25, right: 20
                    }}>
                        <View>
                            <Icon source="check" color={colors.White} />
                        </View>
                    </View>
                )}
            </View>



        </>
    );
};


export default CreateSubcription

const styles = StyleSheet.create({})