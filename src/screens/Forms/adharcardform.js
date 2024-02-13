import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Adharcardform = () => {
    const navigation = useNavigation()
    const [imageState, setImageState] = useState(null)
    const handleCamera = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        }; launchCamera(options, (response) => {
            if (response.didCancel) {

                console.log('User cancelled image picker');
            } else if (response.error) {

                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;

                setImageState(imageUri)

            }
        });
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ top: 20, paddingVertical: 25, paddingHorizontal: 25 }}>
                <TouchableOpacity>
                    <Icon source="less-than" color='black' size={20} />
                </TouchableOpacity>
                <View style={{ top: 10 }}>
                    <Text style={{ color: "black", fontSize: 25, fontWeight: "400" }}>
                        Aadhar card details
                    </Text>
                    <Text style={{ color: "black", fontSize: 16, marginTop: 10, fontWeight: "400" }}>Upload focused photo of your Aadhar Card for faster verification</Text>
                    <View style={{ gap:15, marginTop: 10 }}>

                        <View style={{ paddingVertical: 20, paddingHorizontal:20, borderRadius: 15, borderColor: "grey", borderWidth: 1, borderStyle: "dashed", }}>
                            <View style={{  alignItems: "center",paddingHorizontal:20,paddingVertical:20 }}>
                                {
                                    setImageState === null ?

                                        <Image source={{ uri: imageState }} style={{ height: 100, width: 100, resizeMode: "contain", borderRadius: 8 }} />
                                        :
                                        <Text style={{fontSize:20,fontWeight:'400'}}>
                                            Front side photo of your Aadhar card with your clear name and photo
                                        </Text>
                                }
                                <TouchableOpacity
                                    onPress={handleCamera}
                                    style={{ borderColor: "red", flexDirection: "row",
                                    marginTop:20,
                                    justifyContent: "space-around", alignItems: "center", borderWidth: 1, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 25 }}>
                                    <Icon source='camera' size={25} color='red' />
                                    <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 5 }}>
                                        Upload Photo
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ paddingVertical: 20, paddingHorizontal:20, borderRadius: 15, borderColor: "grey", borderWidth: 1, borderStyle: "dashed", }}>
                            <View style={{  alignItems: "center",paddingHorizontal:20,paddingVertical:20 }}>
                                {
                                    setImageState === null ?

                                        <Image source={{ uri: imageState }} style={{ height: 100, width: 100, resizeMode: "contain", borderRadius: 8 }} />
                                        :
                                        <Text style={{fontSize:20,fontWeight:'400'}}>
                                           Back side photo of your Aadhar card with your clear name and photo
                                        </Text>
                                }
                                <TouchableOpacity
                                    onPress={handleCamera}
                                    style={{ borderColor: "red", flexDirection: "row",
                                    marginTop:20,
                                    justifyContent: "space-around", alignItems: "center", borderWidth: 1, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 25 }}>
                                    <Icon source='camera' size={25} color='red' />
                                    <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 5 }}>
                                        Upload Photo
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default Adharcardform

const styles = StyleSheet.create({})