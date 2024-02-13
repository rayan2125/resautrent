import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Checkbox, Icon, TextInput, DefaultTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import CustomListing from '../component/Custom/customListing';
import CreateSubcription from '../component/createSubcription';
import CustomButton from '../component/Custom/customButton';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import colors from '../assets/config/colors';
import CustomForm from '../component/Custom/customForm';
import icons from '../assets/config/icons';
import LinearGradient from 'react-native-linear-gradient';
import { CustomDropDown } from '../component/Custom/customDropDown';
import { typeTime } from '../services/Dummy/formData';
import { addSubscribe } from '../redux/Reducers/subcriptionListingReducers';
import CustomSbListing from '../component/Custom/customSbListing';
const Subcription = () => {

    const foodListSelector = useSelector(state => state.foodlisting.foodList)
    const subcribeListSelector = useSelector(state => state.subcribeListing.subscribeList)
    const [extraData, setExtraData] = useState('')
    // console.log("checking data is====?",extraData)
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const [isSelected, setIsSelected] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openDrop, setOpenDrop] = useState(false);
    const [isPlan, setIsPlan] = useState('')
    const [listofSubcription, setListOfSubcription] = useState([])
    const [errorplan, setErrorPlan] = useState('')
    const [errorPrice, setErrorPrice] = useState('')
    const [state, setState] = useState({
        plan: '',
        price: ''
    })
    const [finallData, setFinallData] = useState([])

    const theme = {
        ...DefaultTheme,
        roundness: 20,
    };
    const handleNavigation = () => {
        navigation.navigate("FoodListingScreen")
    }



    const handleSubcription = (data) => {
        // navigation.navigate("ManageSubcription",data)
        setOpenModal(true)
    }



    const handleSelect = (item) => {

        setListOfSubcription((prev) => {

            const isItemInList = prev.some((subItem) => subItem.id === item.id);

            if (!isItemInList) {
                // If the item is not in the list, add it
                const updatedList = [...prev, item];
                return updatedList;
            } else {
                // If the item is in the list, remove it
                const updatedList = prev.filter((subItem) => subItem.id !== item.id);
                return updatedList;
            }
        });
    };

    const handleDrop = () => {
        setOpenDrop(true)
    }

    const handlePlan = (item) => {
        setIsPlan(item.label)
        setState((prevState) => ({
            ...prevState,
            plan: item.label
        }));
        setOpenDrop(false)
    }
    const handleAddSubcription = (field, list) => {

        if (field.plan.trim() === "") {
            setErrorPlan("Please Select Your Plan");
        } else {
            setErrorPlan(""); // Clear the error if plan is provided
        }

        if (field.price.trim() === "") {
            setErrorPrice("Please Enter Your Amount");
        } else {
            setErrorPrice(""); // Clear the error if price is provided
        }

        // Continue with other validations if needed

        // If there are no errors, proceed with the form submission logic
        if (errorplan === "" && errorPrice === "") {
            // Your logic to handle successful form submission
            setOpenModal(false);
            setListOfSubcription([]);
            const allData = { field, list }
            setFinallData(allData)
            dispatch(addSubscribe(allData))
        }
    };

    return (
        <View style={{ flex: 1, margin: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    style={{ backgroundColor: colors.Primary, height: 45, width: 45, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon source="chevron-left" size={25} color={colors.White} />
                </TouchableOpacity>
                {/* <Checkbox.Item label='All' status={select} onPress={handleSelectedAll} /> */}
                <TouchableOpacity
                    onPress={handleNavigation}
                    style={{ borderColor: colors.Primary, borderWidth: 5, height: 45, width: 45, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon source="plus" size={25} color={colors.Primary} />
                </TouchableOpacity>
            </View>
            {

                subcribeListSelector.length > 0 ?
                    <FlatList

                        data={subcribeListSelector}
                        renderItem={({ item, index }) => {



                            return (
                                <>

                                    <View style={{}}>

                                        <View style={{

                                            elevation: 10,
                                            zIndex: 10,
                                            marginHorizontal: 10,
                                            marginVertical: 10,
                                            backgroundColor: colors.White, borderRadius: 15, paddingHorizontal: 20, paddingVertical: 20, marginTop: 20
                                        }}>
                                            <Text style={{ fontSize: 18, color: colors.textColor, position: 'absolute', top: 10, right: 20 }}>{item.field.price} Rs/-</Text>

                                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 15, marginTop: 15, marginBottom: 20 }}>
                                                {item.list.map((items, indexs) => (
                                                    <>

                                                        <View key={indexs} style={{
                                                            width: '33.33%',
                                                            // backgroundColor:"red",
                                                            paddingHorizontal: 10, justifyContent: "center", alignItems: "center",
                                                        }}>

                                                            <Image
                                                                source={{ uri: items.photos[0] }}
                                                                style={{ height: 50, width: '100%', borderRadius: 10 }}
                                                                resizeMode='cover'
                                                            />

                                                            <Text style={{ fontSize: 14, color: colors.textColor }}>{items.mealName}</Text>
                                                        </View>
                                                    </>
                                                ))}

                                                <Text style={{ fontSize: 20, color: colors.textColor, position: "absolute", bottom: -25, }}>{item.field.plan}</Text>
                                                <TouchableOpacity
                                                    style={{ position: "absolute", bottom: -25, right: 20, }}
                                                //    onPress={}
                                                >

                                                    <Icon source={icons.down} size={20} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                    </View>
                                </>
                            )
                        }} />

                    :
                    foodListSelector.length > 0 ?
                        <FlatList
                            numColumns={3}
                            showsVerticalScrollIndicator={false}
                            data={foodListSelector}

                            renderItem={({ item, index }) => {

                                return <CreateSubcription
                                    source={{ uri: item.photos[0] }}
                                    foodName={item.mealName}
                                    foodPrice={item.price}
                                    item={item}
                                    key={index}
                                    onPress={() => handleSelect(item)}
                                    select={listofSubcription.some((subItem) => subItem.id === item.id)}
                                />;
                            }}
                        />
                        :

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require("../assets/images/emptyBox.png")}
                                    style={{ height: 400 }}
                                    resizeMode='contain'
                                />

                            </View>
                            <TouchableOpacity
                                onPress={handleNavigation}
                                style={{ backgroundColor: colors.Primary, width: "80%", paddingHorizontal: 20, paddingVertical: 20, borderRadius: 15, alignItems: "center" }}>

                                <Text style={{ color: colors.White, fontSize: 18, fontWeight: "500", fontFamily: 'Roboto' }}> Please Add items</Text>
                            </TouchableOpacity>
                        </View>

            }




            {
                listofSubcription.length > 0
                &&
                <View style={{ justifyContent: "flex-end", height: '5%' }}>

                    <CustomButton
                        onPress={() => handleSubcription(listofSubcription)}
                        btnName="Create Subcriptions"
                        textColor={colors.White}
                        backgroundColor={colors.Primary}

                    />
                </View>
            }
            {openModal &&
                <>
                    <Modal
                        transparent={true}
                        visible={openModal}

                    >
                        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>

                            <LinearGradient
                                colors={[colors.Primary, colors.White]}
                                style={{ margin: 10, paddingHorizontal: 15, paddingVertical: 20, borderRadius: 15 }}>
                                <CustomForm
                                    theme={theme}
                                    placeholder="Please Select Your Plan"
                                    error={errorplan}
                                    mode="outlined"
                                    editable={false}
                                    value={isPlan}
                                    right={
                                        <TextInput.Icon icon={icons.down} color={colors.Primary} onPress={handleDrop} />
                                    }

                                />
                                {
                                    openDrop &&
                                    <CustomDropDown
                                        onSelect={handlePlan}
                                        data={typeTime}
                                    />
                                }
                                <CustomForm
                                    theme={theme}
                                    mode="outlined"
                                    onChangeText={(text) => setState({ ...state, price: text })}
                                    error={errorPrice}
                                    placeholder="Enter Your Amout"
                                    keyboardType="number-pad"
                                    right={
                                        <TextInput.Icon icon="currency-inr" color={colors.Primary} />
                                    }
                                />

                                <View style={{ flexDirection: "row", gap: 15 }}>
                                    <CustomButton
                                        onPress={() => setOpenModal(false)}
                                        backgroundColor={colors.red} btnName="Cancel" textColor={colors.White} />
                                    <CustomButton
                                        onPress={() => handleAddSubcription(state, listofSubcription)}
                                        backgroundColor={colors.green} btnName="Add" textColor={colors.White} />
                                </View>
                            </LinearGradient>
                        </View>
                    </Modal>

                </>
            }

        </View>
    )
}

export default Subcription

const styles = StyleSheet.create({})