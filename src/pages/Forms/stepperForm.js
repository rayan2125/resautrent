import { ActivityIndicator, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Registration from '../../screens/registration';
import Register from '../../screens/Auth/register';
import FrontAdharCardForm from './frontAdharCardform';
import BackAdharCardFrom from './backAdharCardfrom';
import PanCardForm from './panCardform';
import colors from '../../assets/config/colors';
import Bankform from './bankform';
import RestoDetail from './restoDetail';
import PersonalInfo from './personalInfo';
import { callAxios, callAxiosWithFormData, callAxiosWithFormDataRegister, registerUser } from '../../services/api';
import { API_CONSTANTS } from '../../assets/config/constant';
import { useDispatch, useSelector } from 'react-redux';
import mime from 'mime';
import BlackCheckForm from './blackCheckform';
import MerchantImages from './merchantImageForm';
import FssaiForm from './fssaiform';
import MPanCardForm from './mPanCardform';
import CustomAlert from '../../component/Custom/customAlert';
import { useNavigation } from '@react-navigation/native';
import { PacmanIndicator } from "react-native-indicators"
import { removeFssai, removeMPan, removebadhar, removecheque, removefadhar, removemImg, removepan } from '../../redux/Reducers/perInfoReducers';
const StepperForm = () => {
    const dispatch = useDispatch()
    let locSelector = useSelector((state) => state.auth.location)
    let selector = useSelector((state) => state.prnInfo)
    let navigation = useNavigation()
    let back = selector.badharInfo
    let font = selector.fadharInfo
    let pan = selector.panInfo
    let cheq = selector.chequeInfo
    let hotel = selector.mImage
    let fssai = selector.fssaiInfo
    let mPan = selector.mPancardInfo
    const backAdharUri = back && back.uri ? "file:///" + back.uri.split("file:/").join("") : "";
    const frontAdharUri = font && font.uri ? "file:///" + font.uri.split("file:/").join("") : "";
    const panUri = pan && pan.uri ? "file:///" + pan.uri.split("file:/").join("") : "";
    const cheque = cheq && cheq.uri ? "file:///" + cheq.uri.split("file:/").join("") : "";
    const merchantImg = hotel && hotel.uri ? "file:///" + hotel.uri.split("file:/").join("") : "";
    const fassImg = fssai && fssai.uri ? "file:///" + fssai.uri.split("file:/").join("") : "";
    const mPanImg = mPan && mPan.uri ? "file:///" + mPan.uri.split("file:/").join("") : "";

    const [state, setState] = useState({
        userName: '',
        userEmail: '',
        userNumber: '',
        userPassword: '',
    });
    const [bstate, setBState] = useState({
        account: '',
        name: '',
        bankName: '',
        ifsc: '',
        address: ''
    })
    const [rstate, setRstate] = useState({
        name: '',
        email: '',
        number: '',
        gst: '',
        startTime: '',
        endTime: '',

    })
    const [addstate, setAddstate] = useState({
        address: '',
        landmark: '',
        city: '',
        hState: '',
        zipcode: ''

    })
    const [resMesg, setResMesg] = useState('')
    const [serverMsg, setServerMsg] = useState('')

    const [status, setStatus] = useState('');
    const [errors, setErrors] = useState({});
    const [resStatus, setResStatus] = useState(false)
    const [isConnected, setIsConnected] = useState(true);
    const [isactive, setActive] = useState(false)


    const validateStep = async () => {
        const { userName, userEmail, userNumber, userPassword } = state;
        const stepErrors = {};

        if (userName.trim() === '') {
            stepErrors.userName = 'Name is required';
        }
        if (userEmail.trim() === '') {
            stepErrors.userEmail = 'Email is required';
        }
        if (userNumber.trim() === '') {
            stepErrors.userNumber = 'Phone number is required';
        }
        if (userPassword.trim() === '') {
            stepErrors.userPassword = 'Password is required';
        }

        setErrors(stepErrors);
        const isValid = Object.keys(stepErrors).length === 0;

        if (isValid) {
            try {
                const datas = {
                    name: userName,
                    email: userEmail,
                    password: userPassword,
                    cNumber: userNumber
                };
                const response = await registerUser(datas);

                if (response.data.status === "success") {
                    ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
                    return true;
                } else {
                    ToastAndroid.show("This User already Exists. Please try another.", ToastAndroid.SHORT);
                    return false;
                }
            } catch (error) {
                console.error('Error registering user:', error);
                ToastAndroid.show("Network problem. Please try again later.", ToastAndroid.SHORT);
                return false;
            }
        }

    };

    const validateImage = () => {
        const stepErrors = {};

        if (!frontAdharUri) {
            stepErrors.frontAdharUri = 'Front Adhar Card photo is required';
        }
        if (!backAdharUri) {
            stepErrors.backAdharUri = 'Back Adhar Card photo is required';
        }
        if (!panUri) {
            stepErrors.panUri = 'PAN Card photo is required';
        }

        setErrors(stepErrors);
        const isValid = Object.keys(stepErrors).length === 0;
        setStatus(isValid ? 'completed' : 'failed');
        return isValid;
    };
    const validateBankDetails = () => {
        const { account, name, bankName, ifsc, address } = bstate;
        const stepErrors = {};

        if (account.trim() === '') {
            stepErrors.account = 'Account number is required';
        }
        if (name.trim() === '') {
            stepErrors.name = 'Account name is required';
        }
        if (bankName.trim() === '') {
            stepErrors.bankName = 'Bank name is required';
        }
        if (ifsc.trim() === '') {
            stepErrors.ifsc = 'IFSC code is required';
        }
        if (address.trim() === '') {
            stepErrors.address = 'Bank address is required';
        }
        if (!cheque) {
            stepErrors.cheque = 'Blank cheque is required';
        }

        setErrors({ ...errors, ...stepErrors });
        const isValid = Object.keys(stepErrors).length === 0;
        setStatus(isValid ? 'completed' : 'failed');
        return isValid;
    };
    const validateHotel = () => {
        const { name, email, number, gst, startTime, endTime } = rstate;
        const stepErrors = {};

        if (name.trim() === '') {
            stepErrors.name = 'Hotel Name is required';
        }
        if (email.trim() === '') {
            stepErrors.userEmail = 'Email is required';
        }
        if (number.trim() === '') {
            stepErrors.number = 'Phone number is required';
        }
        if (gst.trim() === '') {
            stepErrors.gst = 'GST is required';
        }
        if (startTime.trim() === '') {
            stepErrors.startTime = 'Start Time is required';
        }
        if (endTime.trim() === '') {
            stepErrors.endTime = 'End Time is required';
        }
        if (!merchantImg) {
            stepErrors.merchantImg = 'Hotel Photo is required';
        }
        if (!fassImg) {
            stepErrors.fassImg = 'Fassai photo  is required';
        }
        if (!mPanImg) {
            stepErrors.mPanImg = 'Hotel Pan Card is required';
        }


        setErrors({ ...errors, ...stepErrors });
        const isValid = Object.keys(stepErrors).length === 0;
        setStatus(isValid ? 'completed' : 'failed');
        return isValid;
    };
    const validateAddress = () => {
        const { address, landmark, city, hState, zipcode } = addstate;
        const stepErrors = {};

        if (!address.trim()) {
            stepErrors.address = 'Address is required';
        }
        if (!landmark.trim()) {
            stepErrors.landmark = 'Landmark is required';
        }
        if (!city.trim()) {
            stepErrors.city = 'City is required';
        }
        if (!hState.trim()) {
            stepErrors.hState = 'State is required';
        }
        if (!zipcode.trim()) {
            stepErrors.zipcode = 'Zipcode is required';
        }

        setErrors({ ...errors, ...stepErrors });
        const isValid = Object.keys(stepErrors).length === 0;
        setStatus(isValid ? 'completed' : 'failed');
        return isValid;
    };

    const handleSubmit = async () => {
        try {
            const formData = new FormData();

            setActive(true);

            formData.append('name', state.userName);
            formData.append('email', state.userEmail);
            formData.append('password', state.userPassword);
            formData.append('cNumber', state.userNumber);
            formData.append('mName', rstate.name);
            formData.append('mEmail', rstate.email);
            formData.append('mContact', rstate.number);
            formData.append('gst', rstate.gst);
            formData.append('area', addstate.address);
            formData.append('street', addstate.address);
            formData.append('landmark', addstate.landmark);
            formData.append('city', addstate.city);
            formData.append('state', addstate.hState);
            formData.append('zipCode', addstate.zipcode);
            formData.append('latitude', locSelector.latitude);
            formData.append('longitude', locSelector.longitude);
            formData.append('startTime', rstate.startTime);
            formData.append('endTime', rstate.endTime);
            formData.append('accountNumber', bstate.account);
            formData.append('accountName', bstate.name);
            formData.append('bankName', bstate.bankName);
            formData.append('ifscCode', bstate.ifsc);
            formData.append('bankAddress', bstate.address);

            const addFileToFormData = (key, fileUri) => {
                if (fileUri) {
                    formData.append(key, {
                        uri: fileUri,
                        type: mime.getType(fileUri),
                        name: fileUri.split("/").pop(),
                    });
                }
            };

            addFileToFormData('adharFront', frontAdharUri);
            addFileToFormData('adharBack', backAdharUri);
            addFileToFormData('panCard', panUri);
            addFileToFormData('mImage', merchantImg);
            addFileToFormData('mPanCard', mPanImg);
            addFileToFormData('mFssai', fassImg);
            addFileToFormData('blankCheck', cheque);

            console.log("Form data being sent:", formData);

            const response = await callAxiosWithFormDataRegister(API_CONSTANTS.merchant, formData);
            const data = response.data;

            if (data.status === "success") {
                setActive(false);
                setResStatus(true);
                setResMesg("Success");
                ToastAndroid.show("Registration Successful!", ToastAndroid.SHORT);
                navigation.navigate("AfterRegistration");

                dispatch(removefadhar(null));
                dispatch(removebadhar(null));
                dispatch(removepan(null));
                dispatch(removeMPan(null));
                dispatch(removecheque(null));
                dispatch(removeFssai(null));
                dispatch(removemImg(null));
            } else {
                setActive(false);
                setResStatus(true);
                setResMesg("Fail");
                ToastAndroid.show("Registration Failed: " + data.message, ToastAndroid.SHORT);
            }
        } catch (error) {
            setActive(false);
            console.error('Error during registration:', error);
            ToastAndroid.show("Network problem. Please try again later.", ToastAndroid.SHORT);
        }
    };

    const handlenavigation = (mes) => {
        mes === "Success" ?
            navigation.navigate("AfterRegistration") : setResStatus(false)


    }
    return (
        <View style={{ flex: 1, margin: 10, paddingVertical: 5, paddingHorizontal: 10 }}>
            {!isConnected && (
                <Text style={{ color: 'red', textAlign: 'center', marginBottom: 10 }}>
                    You are offline. Please check your network connection.
                </Text>
            )}

            {isactive && <View style={{ position: 'absolute', top: '50%', left: '50%', zIndex: 9, }}>

                {/* <PacmanIndicator size={70}
                    color={colors.Primary} /> */}
            </View>}
            <ProgressSteps>
                <ProgressStep label="Register" onNext={() => validateStep()} status={status} validateStep={validateStep} data={state} >
                    <View style={{}}>
                        <Text style={{ fontSize: 20, color: colors.textColor, fontWeight: "400" }}>Register</Text>
                        <Register state={state} setState={setState} errors={errors} validateStep={validateStep} />
                    </View>
                </ProgressStep>
                <ProgressStep label="PI" onNext={() => validateImage()} validateImage={validateImage}>
                    <View style={{}}>
                        <Text style={{ fontSize: 20, color: colors.textColor, fontWeight: "400" }}>Personal Information</Text>
                        <FrontAdharCardForm />
                        {errors.frontAdharUri && <Text style={{ color: colors.red }}>{errors.frontAdharUri}</Text>}
                        <BackAdharCardFrom />
                        {errors.backAdharUri && <Text style={{ color: colors.red }}>{errors.backAdharUri}</Text>}
                        <PanCardForm />
                        {errors.panUri && <Text style={{ color: colors.red }}>{errors.panUri}</Text>}
                    </View>
                </ProgressStep>

                <ProgressStep label="BI" onNext={() => validateBankDetails()} validateBank={validateBankDetails}>
                    <View style={{}}>
                        <Bankform state={bstate} setState={setBState} errors={errors} />
                        <BlackCheckForm />
                        {errors.cheque && <Text style={{ color: colors.red }}>{errors.cheque}</Text>}
                    </View>
                </ProgressStep>
                <ProgressStep label="RI" onNext={() => validateHotel()} validateHotel={validateHotel}>
                    <View style={{}}>
                        <RestoDetail state={rstate} setState={setRstate} errors={errors} />
                        <MerchantImages />
                        {errors.merchantImg && <Text style={{ color: colors.red }}>{errors.merchantImg}</Text>}
                        <FssaiForm />
                        {errors.fassImg && <Text style={{ color: colors.red }}>{errors.fassImg}</Text>}
                        <MPanCardForm />
                        {errors.mPanImg && <Text style={{ color: colors.red }}>{errors.mPanImg}</Text>}
                    </View>
                </ProgressStep>

                <ProgressStep label="Address" onSubmit={() => handleSubmit()}>
                    <View style={{}}>
                        <PersonalInfo state={addstate} setState={setAddstate} errors={errors} />
                    </View>
                </ProgressStep>
            </ProgressSteps>
            {resStatus &&
                <CustomAlert
                    displayMsg={resMesg}
                    dismissAlert={() => handlenavigation(resMesg)}
                    message={serverMsg}
                />
            }
        </View>
    )
}

export default StepperForm;



const styles = StyleSheet.create({})