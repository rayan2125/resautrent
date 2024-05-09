import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import colors from '../../assets/config/colors';
import { useDispatch, useSelector } from 'react-redux';
import { adharCard, fadharCard, panCard, removefadhar, removepan } from '../../redux/Reducers/perInfoReducers';

const FrontAdharCardForm = () => {
    let dispatch = useDispatch()
    let selector = useSelector(state => state.prnInfo.fadharInfo)
   
    const navigation = useNavigation()




    const handleCamera = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        }; launchCamera(options, (response) => {
            if (response.didCancel) {

                
            } else if (response.error) {

            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;

                dispatch(fadharCard(response.assets?.[0]))
            }
        });
    }

    const handleNavigate = () => {
        navigation.navigate("Personalform")
    }
    const handleRemove = () => {

        dispatch(removefadhar(null))
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{  paddingVertical: 10, }}>
                
                <View style={{}}>
                    <Text style={{ color: "black", fontSize: 25, fontWeight: "400" }}>Front Adhar Card Details </Text>
                    <View style={{ gap: 15, marginTop: 10 }}>

                        <View style={{ paddingVertical: selector === null ? 20 : 10, paddingHorizontal: selector === null ? 20 : 0, borderRadius: 15, borderColor: "grey", borderWidth: 1, borderStyle: "dashed", }}>
                            <View style={{ alignItems: "center", paddingHorizontal: selector === null ? 20 : 0, paddingVertical: selector === null ? 20 : 10 }}>
                                {
                                    selector === null ?
                                        <View style={{ alignItems: "center" }}>

                                            <Text style={{ fontSize: 20, fontWeight: '400' }}>Front side photo of your Front Adhar card with your clear name and photo</Text>
                                            <TouchableOpacity
                                                onPress={handleCamera}
                                                style={{

                                                    borderColor: "red", flexDirection: "row",
                                                    marginTop: 20,
                                                    alignItems: "center", borderWidth: 1, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 25
                                                }}>
                                                <Icon source='camera' size={25} color='red' />
                                                <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 5 }}>
                                                    Upload Photo
                                                </Text>
                                            </TouchableOpacity>
                                        </View>



                                        :
                                        <View style={{ paddingHorizontal: 10 }}>



                                            <Image source={selector ? { uri: selector?.uri } : null} style={{ height: 200, width: 300, borderRadius: 8, left: 5 }} />

                                            <View style={{ flexDirection: "row", justifyContent:"center", gap: 5 }}>

                                                <TouchableOpacity
                                                    onPress={() => handleRemove()}
                                                    style={{
                                                        backgroundColor: colors.red,
                                                        width: '48%',
                                                        marginTop: 10, alignItems: "center", borderRadius: 20, paddingHorizontal: 10, paddingVertical: 10
                                                    }}>
                                                    <Text style={{ color: colors.White }}>Remove</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                }
                                    




                            </View>
                        </View>

                    </View>
                </View>
            </View>

        </View>
    )
}

export default FrontAdharCardForm

const styles = StyleSheet.create({})