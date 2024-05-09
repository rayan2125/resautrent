import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, PermissionsAndroid } from 'react-native';
import { Provider as PaperProvider, TextInput, DefaultTheme, Icon } from 'react-native-paper';
import CustomForm from '../../component/Custom/customForm';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { useDispatch, useSelector } from 'react-redux';
import { loc } from '../../redux/Reducers/authReducers';


const PersonalInfo = ({ state, setState, errors,position }) => {
    let dispatch =useDispatch()
     position=initialRegion
    let selector= useSelector(state=>state.auth.location)
    const [initialRegion, setInitialRegion] = useState({
        latitude:selector?.latitude,
        longitude:selector.longitude ,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
   
    

    useEffect(() => {
        requestCameraPermission()
    }, []);
    
    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {

                Geolocation.getCurrentPosition(
                    (position) => {

                        const { latitude, longitude } = position.coords;
                        setInitialRegion(prevRegion => ({
                            ...prevRegion,
                            latitude,
                            longitude,
                        }));
                    },
                    (error) => {
                        
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }

                );



            } else {
               
            }
        } catch (err) {
           
        }
    };
   










    return (
        <>

            <View style={{ flex: 1, padding: 20 }}>
                <Text style={{ fontSize: 22, color: "#2B2E35" }}>Merchant  Address</Text>


                <View style={{ marginTop: 10, flex: 1, gap: 5 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <CustomForm
                            mode="outlined"
                            value={state.address}
                            onChangeText={(text) => setState({ ...state, address: text })}
                            error={errors?.address}
                            placeholder="Enter Your Hotel Address"
                        />

                        <CustomForm
                            mode="outlined"
                            value={state.landmark}
                            onChangeText={(text) => setState({ ...state, landmark: text })}
                            error={errors?.landmark}
                            placeholder="Enter Your LandMark"
                        />
                        <CustomForm
                            mode="outlined"
                            value={state.city}
                            onChangeText={(text) => setState({ ...state, city: text })}
                            error={errors?.city}
                            placeholder="Enter Your City Name"
                        />
                        <CustomForm
                            mode="outlined"
                            value={state.hState}
                            onChangeText={(text) => setState({ ...state, hState: text })}
                            error={errors?.hState}
                            placeholder="Enter Your State "
                        />
                        <CustomForm
                            mode="outlined"
                            value={state.zipcode}
                            onChangeText={(text) => setState({ ...state, zipcode: text })}
                            error={errors?.zipcode}
                            keyboardType="number-pad"
                            placeholder="Enter Your ZipCode"
                        />

                        <MapView
                            style={{ height: 200, width: '100%' }}
                            initialRegion={initialRegion}
                            onPress={(e) => {
                                const { latitude, longitude } = e.nativeEvent.coordinate;
                                setInitialRegion({
                                    latitude,
                                    longitude,
                                    latitudeDelta: initialRegion.latitudeDelta,
                                    longitudeDelta: initialRegion.longitudeDelta,
                                });
                                dispatch(loc(e.nativeEvent.coordinate));
                            }}
                        >
                            <Marker
                                draggable
                                coordinate={initialRegion}
                                onDragEnd={(e) => {
                                    setInitialRegion({
                                        latitude: e.nativeEvent.coordinate.latitude,
                                        longitude: e.nativeEvent.coordinate.longitude,
                                        latitudeDelta: initialRegion.latitudeDelta,
                                        longitudeDelta: initialRegion.longitudeDelta,
                                    });
                                }}
                            />
                        </MapView>


                    </ScrollView>
                </View>
            </View>



        </>

    );
};

export default PersonalInfo;

