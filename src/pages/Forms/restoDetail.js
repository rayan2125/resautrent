import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Provider as PaperProvider, TextInput, DefaultTheme, Icon, Checkbox, RadioButton } from 'react-native-paper';
import CustomForm from '../../component/Custom/customForm';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import CustomDatePicker from '../../component/customDatePicker';
import { useNavigation } from '@react-navigation/native';
import { callAxios } from '../../services/api';
import { API_CONSTANTS } from '../../assets/config/constant';
import colors from '../../assets/config/colors';
import MerchantImages from './merchantImageForm';
import FssaiForm from './fssaiform';
import MPanCardForm from './mPanCardform';



const RestoDetail = ({ state, setState, errors }) => {

    return (
        <>

            <View style={{ flex: 1, }}>

                <Text style={{ fontSize: 22, color: "#2B2E35" }}>Restaurant Details</Text>

                <View style={{ marginTop: 10, flex: 1, gap: 5 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <CustomForm
                            mode="outlined"
                            value={state.name}
                            onChangeText={(text) => setState({ ...state, name: text })}
                            error={errors?.name}
                            placeholder="Enter Your Hotel Name"
                        />
                        <CustomForm
                            mode="outlined"
                            value={state.email}
                            onChangeText={(text) => setState({ ...state, email: text })}
                            error={errors?.email}
                            placeholder="Enter Your Hotel Email"
                        />
                        <CustomForm
                            mode="outlined"
                            value={state.number}
                            onChangeText={(text) => setState({ ...state, number: text })}
                            error={errors?.number}
                            keyboardType="number-pad"
                            placeholder="Enter Your Hotel Number"
                        />
                        <CustomForm
                            mode="outlined"
                            value={state.gst}
                            onChangeText={(text) => setState({ ...state, gst: text })}
                            error={errors?.gst}
                            placeholder="Enter Your GST Number"
                        />

                        <View style={{ flexDirection: "row", gap: 30 }}>
                            <CustomForm
                                title="Start Time"
                                mode="outlined"
                                keyboardType="number-pad"
                                onChangeText={(text) => setState({ ...state, startTime: text })}
                            />
                            <CustomForm
                                title="End Time"
                                mode="outlined"
                                keyboardType="number-pad"
                                onChangeText={(text) => setState({ ...state, endTime: text })}
                            />

                        </View>
                    </ScrollView>
                </View>
            </View>



        </>

    );
};

export default RestoDetail;
