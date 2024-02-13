import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { PaperProvider, DefaultTheme, MD2Colors, ActivityIndicator } from 'react-native-paper';
import CustomForm from '../../component/Custom/customForm';
import CustomButton from '../../component/Custom/customButton';
import colors from '../../assets/config/colors';
import { useNavigation } from '@react-navigation/native';
import Api, { callAxios } from '../../services/api';
import { API_CONSTANTS } from '../../assets/config/constant';

import CustomDialog from '../../component/CustomButton/dialog';
import { Failed, Success } from '../../services/utilities';
import { useDispatch, useSelector } from 'react-redux';
import { authToken, logout, setAuthdata } from '../../redux/Reducers/authReducers';
import { useNetInfo } from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const dispatch = useDispatch()
  const selector = useSelector(state => state.auth.authData)
  const netInfo = useNetInfo()

  const navigation = useNavigation()
  const [status, setStatus] = useState('')

  const [state, setState] = useState({
    userEmail: '',
    passWord: '',
    flag: 'merchant'
  })
  const [loader, setLoader] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccesMessage] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [visibleDialog, setVisibleDialog] = useState(true);
  const handleSubmit = async () => {


    try {
      const isConnect = netInfo.isConnected;

      if (!isConnect) {
        setErrorMessage({ message: 'Device is offline.' })
        setStatus(2)


        return;
      }
      let isValid = true;
      setLoader(true)
      if (state.userEmail === "") {
        setEmailError("Please enter your email");
        isValid = false;
      } else {
        setEmailError('');
      }

      if (state.passWord === '') {
        setPasswordError("Please enter your password");
        isValid = false;
      } else if (state.passWord.length < 6) {
        setPasswordError("Password must be at least 6 characters");
        isValid = false;
      } else {
        setPasswordError('');
      }

      if (isValid) {
        callAxios(API_CONSTANTS.login, state)
          .then((res) => {
              console.log(res)
            if (res.data.status === "Success") {
              let authData = res.data
              let token = res.data.token
              setStatus(1)
              setSuccesMessage(authData)
              dispatch(setAuthdata(authData))


              setTimeout(() => {

                navigation.navigate("Home")
                setStatus('')
              }, 1000);
              try {
                AsyncStorage.setItem("token", token);
              } catch (error) {
                setErrorMessage(error);
                setStatus(2);
                setLoader(false);
                setState({ ...state, userEmail: '', passWord: '' })
              }
              setState({ ...state, userEmail: '', passWord: '' })

            }
            else {
              const errorMsg = res.data.error.data
              setErrorMessage(errorMsg)
              setStatus(2)
              setLoader(false)
              setState({ ...state, userEmail: '', passWord: '' })
            }

          }
          )
          .catch((error) => {

            if (error.response) {
              let errorMessages = error.response.data
              setErrorMessage(errorMessages)
              setStatus(2)
              setLoader(false)
              setState({ ...state, userEmail: '', passWord: '' })

            }


          })
      }

    } catch (error) {




    }
    setTimeout(() => {
      setLoader(false)

    }, 1000);


  };

  const handleLogout = () => {
    dispatch(logout())
  }



  return (
    <PaperProvider
      theme={{
        ...DefaultTheme,
        roundness: 15,
        colors: {
          ...DefaultTheme.colors,
          primary: colors.Primary,
        },
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >

        <View style={{ flex: 1 }}>
          {
            loader &&
            <View style={{ position: "absolute", top: '50%', right: "47%", zIndex: 9, backgroundColor: colors.White, borderRadius: 100, paddingHorizontal: 10, paddingVertical: 10 }}>

              <ActivityIndicator animating={true} color={colors.Primary} />
              {/* <Text>Loading</Text> */}
            </View>
          }
          {
            status
            &&
            <View style={{ top: 10, }}>

              {

                status === 1 ?
                  <Success

                    message={successMessage.message}
                  /> :
                  status === 2 ?
                    <Failed

                      message={errorMessage.message}
                    /> : {}
              }
            </View>}

          <View style={{ flex: 1, margin: 20, }}>
            <View style={{ height: 200 }}>

            </View>
            <CustomForm
              mode="outlined"
              keyboardType="email-address"
              placeholder="Enter email address"
              onChangeText={(text) => setState({ ...state, userEmail: text })}
              error={emailError}
              value={state.userEmail}
            />

            <CustomForm
              secureTextEntry={true}
              mode="outlined"
              placeholder="Enter password"
              onChangeText={(text) => setState({ ...state, passWord: text })}
              error={passwordError}
              value={state.passWord}
            />

            <View style={{ gap: 20, marginTop: 20 }}>
              <CustomButton
                btnName="Login"
                backgroundColor={colors.Primary}
                onPress={handleSubmit}
              />
              <CustomButton
                backgroundColor={colors.green}
                btnName="Register"
                onPress={() => navigation.navigate("Register")}
              />
            </View>
            <TouchableOpacity
              onPress={handleLogout}
              style={{ alignItems: "center", marginTop: 10 }}>
              <Text style={{ color: colors.Primary, fontSize: 14, fontWeight: '600' }}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
        </View>

      </KeyboardAvoidingView>
    </PaperProvider>
  );
};

export default Login;

const styles = StyleSheet.create({});
