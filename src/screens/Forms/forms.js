import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Provider as PaperProvider, TextInput, DefaultTheme, Icon } from 'react-native-paper';
import CustomForm from '../../component/customForm';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import CustomDatePicker from '../../component/customDatePicker';
import { useNavigation } from '@react-navigation/native';

const theme = {
    ...DefaultTheme,
    roundness: 12,
};

const Forms = () => {
    const navigation = useNavigation()
    const defaultImgae = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAYFBMVEUAAAD////4+Pjm5ub09PSXl5egoKBjY2OysrLb29vJycn7+/sfHx+/v7/T09Pp6em4uLg7OzswMDCCgoJaWlomJiYYGBiPj48RERFFRUV6enqsrKxAQEBUVFRvb28rKytpG4vvAAAFKElEQVR4nO2c65KiMBCFEQIISkS8IqPz/m+5UrszNeTG6aQNTtWe/zv1bQh9PZisArWTTX7ru3Ny3Xb9IW/kLvQvrlZJ0L/O8vIjUdSXRShXAFQ2dCrQN1gbxOUNJfK9DWnUR5FGhxKFi+iv1pu4UFK7SSbdq5hQBwRpVB4NKitRpiR5eF14OlSFIz3VZTGg6i0JKtnL10PVNKRR9OtOhKqvdKiOTEWDot2nL22pt50ElUHhSddRvBCKEAumur0OCkgtNq1fBVV5XPIvfZKuFQHq7s/0DO2vgWpDmJKEEkNhKNGHQZWE+gqGasKYSEcFQ1lLX1R3fiiPnKcKzzYoFFzX2YVXfCCUCH56lGQDQslwJsLzA6FyDig414BQzh4P1ZEXSnxyQH3yQskzBxRc7GFQgXnvn65oUMegAiqpn2pZoS48UMM7QhWsUAxJZhSaaKJCXf5DgeJ9fG/59jHFKTQjY1BrHqiaFcpn2KLrjA7QMKjdiQPqhHZZYD3FUA0nSQ8yoVA3Dig0y6BQwa3oKLgdBaF2DDd9z93NbB7hUAeUCW5GGWpPNErhUCK4Sj/BTPiAIzjToLUwBWpH3DSo+iBMiPFJXuBRUUaxOFQadFR7AhNlEBsUQElrIwJUSKzCYxQRapV6p2U4FdOhvKdUJ+Iei7bF8ozr1D0kcd/nNTxD+wVfKB8qMhN9h0zutuDSLgCK2tk0dCYfX0JL6CL2eL0SBrWq4CVb6WcO8rKVpDlUHZ89rpM/1DOMHueZHr7+G3//VDODVXrdpkCo1aZxLN8fAUiBnjxRHA05el8OAS6zYKinqiYvu59Aee3jA/KCEpms26FYV2ZLm9hVUlY72wEJORRDK2UGniACJdaH+9dypvR4pZr79zleoAA/CyVaJVRSA2KlbMAe9ayBcA5q0KN3R/KIXPQ4Oxst3FCNuQA+ws+wMe/kSnfZ54LaWMuUE1YjpdY/cHb+AQdU5to89sBhNa4MWTo6ZjuUekHV/+thpg+fc146XhgrFOB0u9hPK63nm0T7EM0GVSE93va4NoZDkUMV18NGZYHCN9m3dhrlhVzDLjmbqcoCRZkGn/pH3srqKTlcyp4yXbO8g2Yopl3MrCyrbiNUFonJNiEyQjGMglEZy3gTFINXCtanqfoyQXn6Xv1kWuEaoFhWHrgMgV2HSoHuiVOGo9KhYt6oUVv9VulQkQ/K9AJqUBnLZpaibh4qVjD/IS2sq1AiyLbsJ22erUL5fTAQJq2wUqEWeHr681Ohor97o9T3T4EKXaD5SV1IKFCRU8w/qbZGBYrF+UpX44LasJgi6CpcUBxmah/dXFDx6uCpeuGAWuaeJ2pRNYVa6J6r4XMK5f2xVajWDqjAb2P8dbBDLfXyqf75CVS1SJIZtbdD8fgBfdSlVqjFIkJyyqxQw2JQZ2mFWqTC+6vaCrVY7FTcVRMoJjO1jwYr1EKFy6jCBsVhUWSHShdLfb8OapH+6o2h8v9QoH7XRX/LOPWeuW+50uVqrxLessjLWL5E8dF0GDRtsaIuQH7q5oB6yw55iTHsqM414FgqfCof/imTPJ4PjqlSvxxTp8OLTBPU6b4KFXuHNapTV37abmaBjkazPmlQm+ixSv8hIX3fV0UO63fdXGLYIcuoA6EPg1vGaAFg+ckGTHeTYclolgj9CR5cZguO2esimL6GnpPlozGbf0pGKI0PNq+Z3f42Z6MORrI7GF3uxSw/vujKz3ie3T7PNKuHQ9lt2Qa01+3+cWnljOf5D1peRPKWrlewAAAAAElFTkSuQmCC"
    const [imageState, setImageState] = useState(defaultImgae)
    const [openDatePicker, setOpenDatePicker] = useState(false)
    const [openDailog, setOpenDailog] = useState(false)


    const [feilds, setFeilds] = useState([
        { key: "First", id: 1, name: "First Name", placeHolder: "Please enter first name" },
        { key: "Last", id: 2, name: "Last Name", placeHolder: "Please enter last name" },
        { key: "Father", id: 3, name: "Father’s Name", placeHolder: "Please enter father’s name" },
        { key: "DOB", id: 4, name: "Date of birth", placeHolder: "dd-mm-yyyy" },
        { key: "Primary", id: 5, name: "Primary mobile number", placeHolder: "e.g. 9999999999" },
        { key: "WhatsApp", id: 6, name: "WhatsApp number", placeHolder: "e.g. 9999999999" },
        { key: "Secondary", id: 7, name: "Secondary mobile number (Optional)", placeHolder: "e.g. 9999999999" },
        { key: "Blood", id: 8, name: "Blood Group", placeHolder: "Enter blood group here" },
        { key: "City", id: 9, name: "City", placeHolder: "e.g. Bangalore" },
        { key: "Address", id: 10, name: "Enter complete address here", placeHolder: "Search address" },
        { key: "Languages", id: 11, name: "Languages you know", placeHolder: "Select one or multiple" },
    ])


    const [formErrors, setFormErrors] = useState({
        First: '',
        Last: '',
        Father: '',
        DOB: '',
        Primary: '',
        WhatsApp: '',
        Secondary: '',
        Blood: '',
        Address: '',
        Languages: '',
        City: '',
        Address: '',
        Languages: ''


    })

    const [formValues, setFormValues] = useState({
        First: '',
        Last: '',
        Father: '',
        DOB: '',
        Primary: '',
        WhatsApp: '',
        Secondary: '',
        Blood: '',
        Address: '',
        Languages: '',
        City: '',
        Address: '',
        Languages: ''
    })
    
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
    const handleCalender = () => {

        setOpenDatePicker(true)
    }
    const handleConfirm = (date) => {
        const dt = new Date(date);
        const hours = dt.getHours();
        const displayHour = hours % 12 || 12;
        const amOrPm = hours >= 12 ? 'PM' : 'AM';
        const formattedTime = `${displayHour}:${dt.getMinutes() === 0 ? '00' : dt.getMinutes()} ${amOrPm}`;

        // setCustomTime(formattedTime)

        setOpenDatePicker(false);
    };
    const handlecancel = () => {
        setOpenDatePicker(false)
    }

    const handleSubmit = (data) => {
setOpenDailog(true)
        let formErrors = {};
        let isFormIncomplete = false;
        Object.entries(data).forEach(([key, value]) => {
            console.log("what is value is coming", key)


            if (value === '') {
                formErrors[key] = `Please Enter ${key}`;
                isFormIncomplete = true;
            }
        });

        if (isFormIncomplete) {
            setFormErrors(formErrors);
            navigation.navigate("PendingForms",1)


        } else {
            setFormErrors({});
           
        }
    }
    return (
        <>
            <PaperProvider theme={theme}>
                <View style={{ flex: 1, padding: 20 }}>
                    <Text style={{ fontSize: 22, color: "#2B2E35" }}>Personal information</Text>
                    <Text style={{ width: "90%", fontSize: 16, color: "#2B2E35", marginTop: 5 }}>
                        Enter the details below so we can get to know and serve you better
                    </Text>

                    <View style={{ marginTop: 10, flex: 1, gap: 5 }}>
                        <ScrollView showsVerticalScrollIndicator={false}>

                            {
                                feilds.map((item, index) => {
                                    return (
                                        <CustomForm
                                            key={index}
                                            title={item.name}
                                            placeholder={item.placeHolder}
                                            mode="outlined"
                                            right={item.id === 4 ? <TextInput.Icon icon="calendar-outline" color="orange" onPress={handleCalender} /> : ''}
                                            error={formErrors[item.key]} // Pass error message to display
                                            onChangeText={(text) => {
                                                setFormValues((prevFormValues) => ({
                                                    ...prevFormValues,
                                                    [item.key]: text,
                                                }))
                                            }}
                                        />

                                    )
                                })
                            }
                            <View style={{ marginTop: 5 }}>
                                <Text style={{ fontSize: 16, color: "#2B2E35" }}>Click Your Selfie</Text>
                                <View style={{ paddingVertical: 10, paddingHorizontal: 10, borderRadius: 15, borderColor: "grey", borderWidth: 1, borderStyle: "dashed", }}>
                                    <View style={{ height: 100, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                                        <Image source={{ uri: imageState }} style={{ height: 100, width: 100, resizeMode: "contain", borderRadius: 8 }} />
                                        <TouchableOpacity
                                            onPress={handleCamera}
                                            style={{ borderColor: "red", flexDirection: "row", justifyContent: "space-around", alignItems: "center", borderWidth: 1, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 25 }}>
                                            <Icon source='camera' size={25} color='red' />
                                            <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 5 }}>
                                                click your live Photo
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={{ color: "red" }}>Click your Selfie Please...</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => handleSubmit(formValues)}
                                style={{ backgroundColor: '#FF8A0099', paddingVertical: 15, paddingHorizontal: 15, justifyContent: "center", alignItems: 'center', marginTop: 10, borderRadius: 20 }}>
                                <Text>Submit</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </PaperProvider>
            {
                openDatePicker &&
                <CustomDatePicker
                    mode="Date"
                    onCancel={handlecancel}
                    onConfirm={handleConfirm}
                    isVisible={openDatePicker} />
            }
            {/* {
                openDailog && 
                <DailogBox />
                
            } */}
        </>

    );
};

export default Forms;
