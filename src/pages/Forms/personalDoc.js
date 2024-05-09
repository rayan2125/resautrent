import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Icon } from 'react-native-paper'
import CustomTextFeild from '../../component/Custom/customTextFeild'
import { useNavigation } from '@react-navigation/native'
import colors from '../../assets/config/colors'
import { useDispatch, useSelector } from 'react-redux'
import CustomAlert from '../../component/Custom/customAlert'
import { prsnlDoc } from '../../redux/Reducers/regFormReducers'
import { callAxiosWithFormData } from '../../services/api'
import { API_CONSTANTS } from '../../assets/config/constant'

const PersonalDoc = ({ route }) => {
    let dispatch = useDispatch()
    const [state, setState] = useState({
        frontadhar: '',
        backadhar: '',
        pan: ''
    })

    const [loader, setLoader] = useState(false)
    const [status, setStatus] = useState('')
    const selector = useSelector(state => state.prnInfo)

    useEffect(() => {
        if (selector) {
            setState(prevState => ({
                ...prevState,
                frontadhar: selector.fadharInfo,
                backadhar: selector.badharInfo,
                pan: selector.panInfo
            }));
        }
    }, [selector]);


    const handleSubmit = (data) => {
        // setLoader(true)
        let formData = new FormData()
    formData.append("frontadhar", state.frontadhar)
    formData.append("backadhar", state.backadhar)
    formData.append("pan", state.pan)

        callAxiosWithFormData(API_CONSTANTS.registration ,formData).then().catch()
        // if (data.fontadhar === null || data.backadhar === null || data.pan === null) {

        // }
        // else {
        //         callAxiosWithFormData(API_CONSTANTS.registration ,form)

        // }
        // dispatch(prsnlDoc(data))
        // setTimeout(() => {
        //     setLoader(false)

        //     setStatus('sucess')
        // }, 2000)

    }

    const handelStatus = (data) => {
        if (data === "sucess") {
            setStatus('')
            setTimeout(() => {

                navigation.navigate("Registration")
            }, 100);
        }
    }
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <View style={{ top: 20, paddingVertical: 25, paddingHorizontal: 25 }}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Icon source="less-than" color='black' size={20} />
                </TouchableOpacity>
                <View style={{ top: 10 }}>
                    <Text style={{ color: "black", fontSize: 25, fontWeight: "400" }}>
                        Personal documents
                    </Text>
                    <Text style={{ color: "black", fontSize: 16, marginTop: 10, fontWeight: "400" }}>Upload focused photos of below documents for faster verification</Text>
                    <View style={{ gap: 5, marginTop: 10 }}>
                        <CustomTextFeild
                            title=" Front Aadhar Card"
                            onPress={() => navigation.navigate("FrontAdharCardForm")}
                            extra={state.fontadhar === undefined || state.fontadhar === null ? "" : 'Approved'}
                            color={colors.green}
                        />
                        <CustomTextFeild
                            title=" Back Aadhar Card"
                            onPress={() => navigation.navigate("BackAdharCardFrom")}
                            extra={state.backadhar === undefined || state.backadhar === null ? "" : 'Approved'}
                            color={colors.green}
                        />
                        <CustomTextFeild
                            title="PAN Card"
                            onPress={() => navigation.navigate("PanCardForm")}
                            extra={state.pan === undefined || state.pan === null ? "" : 'Approved'}
                            color={colors.green}
                        />
                        <View style={{ marginTop: 20 }}>
                            <TouchableOpacity
                                onPress={() => handleSubmit(state)}
                                disabled={state.fontadhar === null || state.backadhar === null || state.pan === null}
                                style={{
                                    backgroundColor: (state.fontadhar && state.backadhar && state.pan) ? colors.green : 'grey',
                                    paddingHorizontal: 15,
                                    paddingVertical: 20,
                                    alignItems: "center",
                                    borderRadius: 10
                                }}>
                                <Text style={{ color: colors.White }}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            {status && <CustomAlert displayMode={status} dismissAlert={() => handelStatus(status)} />}
            {
                loader &&

                <View style={{ backgroundColor: colors.Primary, paddingHorizontal: 15, paddingVertical: 15, borderRadius: 100, alignSelf: "center", position: 'absolute', bottom: '50%', zIndex: 9, elevation: 99 }}>
                    <ActivityIndicator animating={loader} color={colors.White} size={20} />
                </View>
            }

        </View>
    )
}

export default PersonalDoc

const styles = StyleSheet.create({}) 
