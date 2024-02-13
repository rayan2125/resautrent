import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import CustomForm from '../../component/customForm';

const Vehicleform = () => {
    const navigation = useNavigation()
    const [imageState, setImageState] = useState(null)
    
    return (
        <View style={{ flex: 1 }}>
            <View style={{ top: 20, paddingVertical: 25, paddingHorizontal: 25 }}>
                <TouchableOpacity>
                    <Icon source="less-than" color='black' size={20} />
                </TouchableOpacity>
                <View style={{ top: 10 }}>
                    <Text style={{ color: "black", fontSize: 25, fontWeight: "400" }}>
                    Vehicle Details
                    </Text>
                    <Text style={{ color: "black", fontSize: 16, marginTop: 10, fontWeight: "400" }}>
                    Upload focused photos of below documents for faster verification
                      </Text>
                    <View style={{ gap:15, marginTop: 10 }}>

                       <CustomForm
                       title="Vehicle Number"
                       mode="outlined"
                       />
                       <CustomForm
                       title="Vehicle RC"
                       mode="outlined"
                       />
                       <CustomForm
                       title="Insurance Number"
                       mode="outlined"
                       />
                       
                        
                    </View>
                    <TouchableOpacity
                            onPress={()=>navigation.navigate('PendingForms')}
                            style={{ backgroundColor: '#FF8A0099', paddingVertical: 15, paddingHorizontal: 15, justifyContent: "center", alignItems: 'center', marginTop: 10, borderRadius: 20 }}>
                                <Text>Submit</Text>
                            </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default Vehicleform

const styles = StyleSheet.create({})