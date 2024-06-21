import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Checkbox, Icon, TextInput, DefaultTheme } from 'react-native-paper';

import CustomListing from '../component/Custom/customListing';
import CreateSubcription from '../component/createSubcription';
import CustomButton from '../component/Custom/customButton';

import colors from '../assets/config/colors';
import CustomForm from '../component/Custom/customForm';
import icons from '../assets/config/icons';
import LinearGradient from 'react-native-linear-gradient';
import { CustomDropDown } from '../component/Custom/customDropDown';
import { preferredFor, typeTime } from '../services/Dummy/formData';
import { useDispatch, useSelector } from 'react-redux';
import { callAxios, callAxiosGet } from '../services/api';
import { API_CONSTANTS } from '../assets/config/constant';
import { addSubcription, removeAllSubcriptions } from '../redux/Reducers/subscriptionReducers';
import FoodSkeleton from '../component/Skeleton/foodSkeleton';
import SubcriptionSkeleton from '../component/Skeleton/subcriptionSkeleton';


const Subcription = () => {
    let dispatch = useDispatch()
    let subcriptionSelector = useSelector(state => state.subciptions.subcriptionPlans)

    useEffect(() => {
        fetchData()
        subList()
    }, [])
    let numColumns = 3
    let skeletonData = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    let skeletonSub = ['1', '2', '3',]
    const navigation = useNavigation();
    const [data, setData] = useState()
    const [imageUrls, setImageUrls] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const [openPlan, setOpenPlan] = useState(false);
    const [openPrefer, setOpenPrefer] = useState(false);
    const [isPlan, setIsPlan] = useState('')
    const [isPrefer, setIsPrfer] = useState('')
    const [listofSubcription, setListOfSubcription] = useState([])
    const [subcribeList, setSubcribeList] = useState([])
    const [skeleton, setSkeleton] = useState(true)
    const [screens, setScreens] = useState(1)

    useEffect(() => {
        const timer = setTimeout(() => {
            setSkeleton(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    const [errorPlan, setErrorPlan] = useState('')
    const [errorPrice, setErrorPrice] = useState('')
    const [state, setState] = useState({
        price: '',
        planType: '',
        prefer: '',
        planName: '',
        c2bFoodId: '',
    })

    const [expandId, setExpandId] = useState('')


    const theme = {
        ...DefaultTheme,
        roundness: 20,
    };
    const handleNavigation = () => {
        setScreens(2)
    }
    const fetchData = () => {
        callAxiosGet(API_CONSTANTS.listingItem)
            .then(res => {
                let listFood = res.data.list

                setData(listFood);

                fetchAllImages(listFood, res.data.userId);
            })
            .catch(err => {

            });
    };
    const subList = () => {
        callAxiosGet(API_CONSTANTS.subListing).then(res => {
            let subciptionsD = res.data.subscriptions
            setSubcribeList(subciptionsD)
        }



        )
    }

    const fetchImage = async (url) => {

        try {
            const response = await fetch(url);
            return response.url;
        } catch (error) {

            return null;
        }
    };


    const listingSub = async () => {

    }

    const fetchAllImages = async (list, userId) => {
        const urls = {};
        for (const item of list) {
            urls[item.id] = await fetchImage(`https://click2bite-d08bc9143b9c.herokuapp.com/api/merchant/read/${userId}/${item.image}`);
        }
        setImageUrls(urls);

    };


    const handleSubcription = (data) => {
        let foodIds = data.map(item => item.item.id);

        setState(prevState => ({
            ...prevState,
            c2bFoodId: foodIds
        }));
        setOpenModal(true);
    };




    const handleSelect = (item) => {

        setListOfSubcription((prev) => {

            const isItemInList = prev.some((subItem) => subItem.item.id === item.item.id);

            if (!isItemInList) {

                const updatedList = [...prev, item];
                return updatedList;
            } else {

                const updatedList = prev.filter((subItem) => subItem.item.id !== item.item.id);
                return updatedList;
            }
        });
    };

    const handleDrop = (data) => {

        if (data === 1) {
            setOpenPlan(!openPlan)
        } else {
            setOpenPrefer(!openPrefer)
        }

    }

    const handlePlan = (item) => {
        setIsPlan(item.label)
        setState((prevState) => ({
            ...prevState,
            planType: item.label
        }));
        setOpenPlan(false)
    }
    const handlePrefer = (item) => {
        setIsPrfer(item.label)
        setState((prevState) => ({
            ...prevState,
            prefer: item.label
        }));
        setOpenPrefer(false)
    }
    const handleAddSubcription = (field, list) => {

        let error = false;
        // if (field.plantype.trim() === "") {
        //     setErrorPlan("Please Select Your Plan");
        //     error = true;
        // } else {
        //     setErrorPlan("");
        // }

        // if (field.price.trim() === "") {
        //     setErrorPrice("Please Enter Your Amount");
        //     error = true;
        // } else {
        //     setErrorPrice("");
        // }

        if (!error) {
            setOpenModal(false);
            // setListOfSubcription([]);
            // const allData = { field, list };
            // dispatch(addSubcription(allData));
            // setFinallData(allData);
            // setScreens(1)
            callAxios(API_CONSTANTS.subcribe, field).then(res => console.log(res))
        }

    };



    const handleCancelletion = () => {

        setOpenModal(false)
        setErrorPlan("")
        setErrorPrice("")
    }
    const handleExpand = (itemId) => {
        setExpandId(prevExpandId => prevExpandId === itemId ? '' : itemId);
    };

    return (
        <View style={{ flex: 1, margin: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    style={{ backgroundColor: colors.green, height: 45, width: 45, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon source="chevron-left" size={25} color={colors.White} />
                </TouchableOpacity>

                {screens && screens === 1 && <TouchableOpacity
                    onPress={handleNavigation}
                    style={{ borderColor: colors.green, borderWidth: 5, height: 45, width: 45, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon source="plus" size={25} color={colors.green} />
                </TouchableOpacity>}
            </View>
            {
                screens === 1 ?
                    (subcribeList && subcribeList.length > 0 ?
                        <FlatList
                            key="flatlist1"
                            showsVerticalScrollIndicator={false}
                            data={subcribeList}
                            renderItem={({ item, index }) => {
                                let listItem = item?.c2bSubcriptionFoods
                                return (
                                    <>

                                        <View key={index}>
                                            <View style={{
                                                elevation: 5,
                                                zIndex: 10,
                                                marginHorizontal: 10,
                                                marginVertical: 10,
                                                backgroundColor: colors.White,
                                                borderRadius: 15,
                                                paddingHorizontal: 20,
                                                paddingVertical: 20,
                                                marginTop: 20
                                            }}>
                                                <TouchableOpacity style={{ position: "absolute", top: 10, right: 20 }}>
                                                    <Icon source={icons.delete} size={20} color={colors.red} />
                                                </TouchableOpacity>
                                                <Text style={{ fontSize: 18, color: colors.textColor, position: 'absolute', top: 10, left: 20 }}>{item?.price} Rs/-</Text>
                                                <Text style={{ fontSize: 14, color: colors.textColor, position: 'absolute', top: 10, left: "40%" }} >{item?.planName}</Text>
                                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 15, marginBottom: 20 }}>
                                                    {expandId === item?.id ? listItem.map((items, indexs) => (

                                                        <View key={indexs} style={{
                                                            width: '30.33%',
                                                            flexWrap: "wrap",
                                                            paddingHorizontal: 10,
                                                            justifyContent: "space-around",
                                                            alignItems: "center",
                                                        }}>
                                                            <Image
                                                                source={{ uri: items?.imageUrl }}
                                                                style={{ height: 50, width: '100%', borderRadius: 10, backgroundColor: "red" }}
                                                                resizeMode='contain'
                                                            />
                                                            <Text style={{ fontSize: 14, color: colors.textColor }}>{items?.c2bFood?.name}</Text>
                                                        </View>
                                                    )) : listItem.slice(0, 3).map((items, indexs) => (

                                                        <View key={indexs} style={{
                                                            width: '30.33%',
                                                            flexWrap: "wrap",
                                                            paddingHorizontal: 10,
                                                            justifyContent: "space-around",
                                                            alignItems: "center",
                                                        }}>
                                                            <Image
                                                                source={{ uri: items?.imageUrl }}
                                                                style={{ height: 50, width: '100%', borderRadius: 10 }}
                                                                resizeMode='contain'
                                                            />
                                                            <Text style={{ fontSize: 14, color: colors.textColor }}>{items?.c2bFood?.name}</Text>
                                                        </View>
                                                    ))}
                                                </View>

                                                <Text style={{ fontSize: 20, color: colors.textColor, position: "absolute", bottom: 5, left: 20 }}>{item?.planType}</Text>
                                                <TouchableOpacity
                                                    style={{ position: "absolute", bottom: 0, right: 20, }}
                                                    onPress={() => handleExpand(item?.id)}
                                                >
                                                    <Icon source={icons.down} size={20} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </>
                                )
                            }} />
                        : (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            {skeleton ? (
                                <FlatList
                                    key="flatlist2"
                                    showsVerticalScrollIndicator={false}
                                    data={skeletonSub}
                                    renderItem={({ item, index }) => (
                                        <SubcriptionSkeleton />
                                    )}
                                />
                            ) : (
                                <>
                                <Image source={require("../assets/images/empty.png")} style={{height:300,width:300}}/>
                                    <Text style={{fontSize:18,color:colors.green}}>Please add your subscription list</Text>
                                    <TouchableOpacity onPress={() => handleNavigation()} style={{ backgroundColor: '#027F25', padding: 10, borderRadius: 5, marginTop: 10 }}>
                                        <Text style={{ color: 'white' }}>Add Now</Text>
                                    </TouchableOpacity>
                                </>
                            )}
                        </View>)
                    ) : (

                        data && data.length > 0 ?
                            <FlatList
                                key="flatlist2"
                                numColumns={numColumns}
                                showsVerticalScrollIndicator={false}
                                data={data}

                                renderItem={({ item, index }) => {
                                    const imageUrl = imageUrls[item.id];
                                    let foodData = { item, imageUrl }
                                    return <CreateSubcription
                                        source={{ uri: imageUrl }}
                                        foodName={item.name}
                                        foodPrice={item.price}
                                        item={item}
                                        key={index}
                                        onPress={() => handleSelect(foodData)}
                                        select={listofSubcription.some((subItem) => subItem.item.id === item.id)}
                                    />;
                                }}
                            /> :
                            <FlatList
                                key="flatlist3"
                                numColumns={numColumns}
                                data={skeletonData}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={{ marginVertical: 2, }}>

                                            <FoodSkeleton />
                                        </View>
                                    )
                                }}
                            />

                    )
            }








            {/* // <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                //     <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                //         <Image source={require("../assets/images/emptyBox.png")}
                //             style={{ height: 400 }}
                //             resizeMode='contain'
                //         />

                //     </View>
                //     <TouchableOpacity
                //         onPress={handleNavigation}
                //         style={{ backgroundColor: colors.Primary, width: "80%", paddingHorizontal: 20, paddingVertical: 20, borderRadius: 15, alignItems: "center" }}>

                //         <Text style={{ color: colors.White, fontSize: 18, fontWeight: "500", fontFamily: 'Roboto' }}> Please Add items</Text>
                //     </TouchableOpacity>
                // </View> */}

            {/* {
                data && data.length > 0 ?
                    <FlatList
                        key="flatlist2"
                        numColumns={numColumns}
                        showsVerticalScrollIndicator={false}
                        data={data}

                        renderItem={({ item, index }) => {
                            const imageUrl = imageUrls[item.id];
                            let foodData = { item, imageUrl }
                            return <CreateSubcription
                                source={{ uri: imageUrl }}
                                foodName={item.name}
                                foodPrice={item.price}
                                item={item}
                                key={index}
                                onPress={() => handleSelect(foodData)}
                                select={listofSubcription.some((subItem) => subItem.item.id === item.id)}
                            />;
                        }}
                    /> :
                    <FlatList
                        numColumns={numColumns}
                        data={skeletonData}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ marginVertical: 2, }}>

                                    <FoodSkeleton />
                                </View>
                            )
                        }}
                    />
            } */}


            {
                listofSubcription.length > 0
                &&
                <View style={{ justifyContent: "flex-end", height: '5%' }}>

                    <CustomButton
                        onPress={() => handleSubcription(listofSubcription)}
                        btnName="Create Subcriptions"
                        textColor={colors.White}
                        fontSize={18}
                        backgroundColor={colors.Primary}

                    />
                </View>
            }
            {
                openModal &&
                <>
                    <Modal
                        transparent={true}
                        visible={openModal}

                    >
                        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.8)', paddingHorizontal: 22, paddingVertical: 15 }}>

                            <LinearGradient
                                colors={[colors.White, colors.Tertiary]}
                                style={{ margin: 10, paddingHorizontal: 25, paddingVertical: 20, borderRadius: 15, elevation: 10 }}>
                                <CustomForm
                                    theme={theme}
                                    placeholder="Please Select Your Plan"
                                    error={errorPlan}
                                    mode="outlined"
                                    editable={false}
                                    value={isPlan}
                                    right={
                                        <TextInput.Icon icon={icons.down} color={colors.Primary} onPress={() => handleDrop(1)} />
                                    }

                                />
                                <CustomForm
                                    theme={theme}
                                    placeholder="Please Enter Your Plan Name"
                                    error={errorPlan}
                                    onChangeText={(text) => setState({ ...state, planName: text })}
                                    mode="outlined"



                                />
                                {
                                    openPlan &&
                                    <CustomDropDown
                                        onSelect={handlePlan}
                                        data={typeTime}
                                    />
                                }
                                <CustomForm
                                    theme={theme}
                                    placeholder="Prefer for "
                                    error={errorPlan}
                                    mode="outlined"
                                    editable={false}
                                    value={isPrefer}
                                    right={
                                        <TextInput.Icon icon={icons.down} color={colors.Primary} onPress={() => handleDrop(2)} />
                                    }

                                />
                                {
                                    openPrefer &&
                                    <CustomDropDown
                                        onSelect={handlePrefer}
                                        data={preferredFor}
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

                                <View style={{ flexDirection: "row", gap: 15, justifyContent: "space-around", marginTop: 10 }}>
                                    <CustomButton
                                        width="40%"
                                        onPress={() => handleCancelletion()}
                                        // backgroundColor={colors.red} 
                                        borderColor={colors.red}
                                        borderWidth={1}
                                        btnName="Cancel Plan" textColor={colors.red} />
                                    <CustomButton
                                        width="40%"
                                        onPress={() => handleAddSubcription(state, listofSubcription)}
                                        // backgroundColor={colors.green}
                                        borderColor={colors.green}
                                        borderWidth={1}
                                        btnName="Add Plan" textColor={colors.green} />
                                </View>
                            </LinearGradient>
                        </View>
                    </Modal>

                </>
            }
            <View>

            </View>


        </View >
    )
}

export default Subcription

const styles = StyleSheet.create({})