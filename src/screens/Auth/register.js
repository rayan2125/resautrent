import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { PaperProvider, DefaultTheme, ActivityIndicator, MD2Colors } from 'react-native-paper';  // Import DefaultTheme
import CustomForm from '../../component/Custom/customForm';
import CustomButton from '../../component/Custom/customButton';
import colors from '../../assets/config/colors';
import { useNavigation } from '@react-navigation/native';
import Api from '../../services/api';
import { API_CONSTANTS } from '../../assets/config/constant';
import { Failed, Success } from '../../services/utilities';

const Register = () => {

  const [state, setState] = useState({
    userName: '',
    userEmail: '',
    userNumber: '',
    userPassword: '',
    flag: 'merchant'
  })
  const [error, setError] = useState({
    userName: '',
    userEmail: '',
    userNumber: '',
    userPassword: '',

  })
  const [status, setStatus] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccesMessage] = useState('')

  const navigation = useNavigation()


  const handleRegister = () => {
    let isError = false;
    const newErrorState = { ...error };

    if (state.userName === '') {
      newErrorState.userName = 'Name is required';
      isError = true;
    } else {
      newErrorState.userName = '';
    }

    if (state.userEmail === '') {
      newErrorState.userEmail = 'Email is required';
      isError = true;
    } else {
      newErrorState.userEmail = '';
    }

    if (state.userNumber === '') {
      newErrorState.userNumber = 'Phone number is required';
      isError = true;
    } else {
      newErrorState.userNumber = '';
    }

    if (state.userPassword === '') {
      newErrorState.userPassword = 'Password is required';
      isError = true;
    } else {
      newErrorState.userPassword = '';
    }

    if (isError) {
      setError(newErrorState);
    } else {
      setError('')
      Api.post(API_CONSTANTS.register, state).then(res => {
        if (res) {
          let authData = res.data
          setStatus(1)
          setSuccesMessage(authData)
          navigation.navigate("Login")
        }
      }).catch(error => {
        console.error("Error is :", error.response)
        if (error.response) {
          let errorMessages = error.response.data
          setErrorMessage(errorMessages)
          setStatus(2)
        }
      })
    }
    setState({
      ...state,
      userName: "",
      userEmail: "",
      userNumber: "",
      userPassword: ""
    })

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
      <View style={{ flex: 1, }}>
        <ActivityIndicator animating={false} color={MD2Colors.red800} />

        {
          status
          &&
          <View style={{ margin: 15 }}>

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
        <View style={{ margin: 20, }}>
          <CustomForm
            value={state.userName}
            mode="outlined"
            placeholder="Enter name"
            onChangeText={(text) => setState({ ...state, userName: text })}
            error={error.userName}
          />
          <CustomForm
            value={state.userEmail}
            keyboardType="email-address"
            mode="outlined"
            placeholder="Enter email"
            onChangeText={(text) => setState({ ...state, userEmail: text })}
            error={error.userEmail}
          />
          <CustomForm
            value={state.userNumber}
            mode="outlined"
            keyboardType="number-pad"
            placeholder="Enter phone"
            onChangeText={(text) => setState({ ...state, userNumber: text })}
            error={error.userNumber}
            maxLength={10}
          />
          <CustomForm
            value={state.userPassword}
            secureTextEntry={true}
            mode="outlined"
            placeholder="Enter password"
            onChangeText={(text) => setState({ ...state, userPassword: text })}
            error={error.userPassword}
          />

          <View style={{ gap: 10, marginTop: 10 }}>
            <CustomButton
              textColor={colors.White}
              backgroundColor={colors.Primary}
              btnName="Register"
              onPress={() => handleRegister(state)}
            />
            <CustomButton
              textColor={colors.White}
              btnName="Login"
              backgroundColor="green"
             onPress={()=>    navigation.navigate("Login")}
            />
          </View>


        </View>

      </View>
    </PaperProvider>
  );
};

export default Register;

const styles = StyleSheet.create({});
