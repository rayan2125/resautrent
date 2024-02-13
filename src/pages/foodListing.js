import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native'
import React, { useState, useRef } from 'react'
import { Icon, TextInput } from 'react-native-paper'
import colors from '../assets/config/colors'
import CustomForm from '../component/Custom/customForm'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import CustomButton from '../component/Custom/customButton'
import { useNavigation } from '@react-navigation/native'
import icons from '../assets/config/icons'
import { CustomDropDown } from '../component/Custom/customDropDown'
import { formData } from '../services/Dummy/formData'
import RBSheet from "react-native-raw-bottom-sheet";
import { useDispatch, useSelector } from 'react-redux'
import { addFood } from '../redux/Reducers/foodListingReducers'
import { callAxios, callAxiosWithFormData } from '../services/api'
import { API_CONSTANTS } from '../assets/config/constant'

const FoodListingForm = () => {
    const foodListSelector = useSelector(state => state.foodlisting.foodList)

    const dispatch = useDispatch()

    const numColumns = 3
    const navigation = useNavigation()

    const [openCamera, setOpenCamera] = useState(false)
    const [openCat, setOpenCat] = useState(false)
    const [openSubCat, setOpenSubCat] = useState(false)
    const [openPreffer, setOpenPreffer] = useState(false)
    const [selectedCat, setSelectedCat] = useState("Enter Your Category")
    const [selectedSubCat, setSelectedSubCat] = useState("Enter Your Sub Category")
    const [selectedPreffer, setSelectedPreffer] = useState("Enter Your Preffer")
    const [upLoad, setUpLoad] = useState([]);
    const [error, setError] = useState('')


    const refRBSheet = useRef();
    const [state, setState] = useState({
        name: 'test',
        price: 'test',
        type: 'veg',
        prefer: 'test',
        description: 'test',
        category: 'test',
        subCategory: 'test',



    })

    const [file, setFile] = useState('')
    console.log(file)

    const catData = [
        { id: 1, label: 'Fast Food' },
        { id: 2, label: 'Indian Food' },
        { id: 3, label: 'Other Food' },
    ]
    const subData = [
        { id: 1, label: 'South Indian' },
        { id: 2, label: 'North Indian' },
        { id: 3, label: 'Punjabi Food' },
        { id: 4, label: 'Gujrati Food' },
        { id: 5, label: 'East  Indian' },
        { id: 6, label: 'West  Indian' },

    ]
    const preferredFor = [
        { id: 1, label: 'BreakFast' },
        { id: 2, label: 'Lunch' },
        { id: 3, label: 'Dinner' },
    ]




    const handleDrop = (id) => {

        if (id === 3) {

            setOpenCat(!openCat)
        }
        if (id === 4) {
            setOpenSubCat(!openSubCat)
        }
        if (id === 5) {
            setOpenPreffer(!openPreffer)
        }
    }
    const handleSelectValue = (id, selectedItem) => {

        if (id === 3) {
            setSelectedCat(selectedItem.label)
            setOpenCat(!openCat)
            setState((prevState) => ({
                ...prevState,
                foodCategory: selectedItem.label
            }));

        }
        if (id === 4) {
            setSelectedSubCat(selectedItem.label)
            setOpenSubCat(!openSubCat)
            setState((prevState) => ({
                ...prevState,
                foodSubcategory: selectedItem.label
            }));
        }
        if (id === 5) {
            setSelectedPreffer(selectedItem.label)
            setOpenPreffer(!openPreffer)
            setState((prevState) => ({
                ...prevState,
                preferredFor: selectedItem.label
            }));
        }
    };
    const handlechange = (item, text) => {
        setState((prevState) => ({
            ...prevState,
            [item]: text,

        }));
    };


    const handleClickImage = () => {



        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };
        launchCamera(options, (response) => {
            if (response.didCancel) {

            } else if (response.error) {

            } else {

                let imageUris = response.uris || response.assets?.map((asset) => asset.uri) || [];
                let imges = response.assets[0].fileName
                const data = [...upLoad, ...imageUris];

                setUpLoad(data)
                setFile(response.assets[0])
                handleClose()

            }
        });
    }
    const handleImagePicker = () => {



        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {

            } else if (response.error) {

            } else {
                let imageUris = response.uris || response.assets?.map((asset) => asset.uri) || [];
                const data = [...upLoad, ...imageUris];
                setUpLoad(data)
                setFile(response.assets[0])
                handleClose()
            }
        });
    }
    const handleClose = () => {
        refRBSheet.current.close()
    }
    const handleOpen = () => {
        refRBSheet.current.open()
    }

    const handleRemoveImage = (index) => {
        const updatedImages = [...upLoad];
        updatedImages.splice(index, 1); // Remove the image at the specified index
        setUpLoad(updatedImages);
        setFile(response.assets[0])
    };
    const ImageGrid = ({ images, numColumns }) => {
        const renderImageGrid = () => {
            const rows = Math.ceil(images.length / numColumns);
            const imageGrid = [];

            for (let i = 0; i < rows; i++) {
                const rowImages = images.slice(i * numColumns, (i + 1) * numColumns);
                const imageRow = rowImages.map((uri, index) => (
                    <TouchableOpacity key={index} onPress={() => console.log(`Image ${i * numColumns + index + 1} clicked!`)}>
                        <Image source={{ uri }} style={{ width: 100, height: 100, borderRadius: 8, margin: 8 }} />
                    </TouchableOpacity>
                ));

                imageGrid.push(
                    <View key={i} style={{ flexDirection: 'row', marginBottom: 8, marginHorizontal: 10, marginVertical: 10 }}>
                        {imageRow}
                        <TouchableOpacity onPress={handleRemoveImage}>
                            <Icon source={icons.delete} />
                        </TouchableOpacity>
                    </View>
                );
            }

            return imageGrid;
        };

        return (
            <ScrollView>
                {renderImageGrid()}
            </ScrollView>
        );
    };
    const handleSumbit = async (state) => {
        try {
            let formData = new FormData();
            formData.append("name", state.name);
            formData.append("price", state.price);
            formData.append("type", state.type);
            formData.append("prefer", state.prefer);
            formData.append("description", state.description);
            formData.append("category", state.category);
            formData.append("subCategory", state.subCategory);
            formData.append('image', {
                uri: "a4c8e9-9dc2-4946-a49d-379e1485c5ef.jpg",
                type: 'image/jpeg',
                name: 'd7fe29b8-9acb-4e94-9df3-41017f508d82.jpg'
            });

            const response = await callAxiosWithFormData(API_CONSTANTS.createItem, {formData});
            console.log("checking response is ", response.data);
            // Handle the response or any further logic here
        } catch (error) {
            console.log("checking error is", error);
            // Handle errors here
        }
    }

    return (
        <View style={{ flex: 1, margin: 10 }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
            >
                {
                    foodListSelector.length > 0 &&
                    <TouchableOpacity
                        onPress={() => navigation.pop()}
                        style={{ backgroundColor: colors.Primary, height: 45, width: 45, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon source="chevron-left" size={25} color={colors.White} />
                    </TouchableOpacity>}
                <View>

                    <View style={{ marginTop: 20 }}>


                        {formData &&
                            formData.map((item, index) => {
                                return (
                                    <View key={index}>

                                        <CustomForm
                                            title={item.name}
                                            mode="outlined"
                                            multiline={item.id === 2}
                                            onChangeText={(text) => handlechange(item.field, text)}
                                            value={
                                                item.id === 3 ? selectedCat :
                                                    item.id === 4 ? selectedSubCat :
                                                        item.id === 5 ? selectedPreffer :
                                                            state[item.field]
                                            }
                                            editable={item.id === 3 || item.id === 4 || item.id === 5 ? false : true}
                                            right={item.id === 3 || item.id === 4 || item.id === 5 ?
                                                <TextInput.Icon icon={icons.down} color={colors.Primary} onPress={() => handleDrop(item.id)} /> : {}
                                            }
                                        />

                                        {item.id === 3 && openCat && <CustomDropDown data={catData} onSelect={(value) => handleSelectValue(item.id, value)} />}
                                        {item.id === 4 && openSubCat && <CustomDropDown data={subData} onSelect={(value) => handleSelectValue(item.id, value)} />}
                                        {item.id === 5 && openPreffer && <CustomDropDown data={preferredFor} onSelect={(value) => handleSelectValue(item.id, value)} />}
                                    </View>
                                );
                            })}

                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            <View style={{ width: "40%", }}>

                                <CustomForm
                                    title="Price"
                                    mode="outlined"
                                    keyboardType='number-pad'
                                    onChangeText={(text) =>
                                        setState((prevState) => ({
                                            ...prevState,
                                            foodPrice: text
                                        }))}
                                    value={state.foodPrice}
                                    right={<TextInput.Icon icon='currency-rupee' />}
                                />
                            </View>
                            <View style={{ width: "40%" }}>

                                <CustomForm
                                    title="Gst"
                                    mode="outlined"
                                    value="18%"
                                    editable={false}
                                    right={<TextInput.Icon icon='currency-rupee' />}
                                />
                            </View>
                        </View>


                        {upLoad && upLoad.length > 0 ? (
                            <View style={{ marginBottom: 20 }}>

                                <ImageGrid images={upLoad} numColumns={numColumns} />

                                <TouchableOpacity
                                    onPress={handleOpen}
                                    style={{ backgroundColor: colors.Tertiary, height: 50, width: 50, alignSelf: 'center', marginTop: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}>
                                    <Icon source={icons.plus} color={colors.textColor} size={30} />
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <View
                                style={{
                                    borderColor: colors.Primary,
                                    borderWidth: 1,
                                    paddingVertical: 20,
                                    paddingHorizontal: 20,
                                    borderStyle: "dashed",
                                    borderRadius: 15,
                                    alignItems: "center",
                                    marginBottom: 20,
                                }}
                            >
                                <TouchableOpacity
                                    onPress={handleOpen}
                                    style={{
                                        backgroundColor: colors.Tertiary,
                                        paddingVertical: 20,
                                        paddingHorizontal: 20,
                                        borderStyle: "dashed",
                                        borderRadius: 100,
                                    }}
                                >
                                    <Icon source={icons.upload} color={colors.Primary} size={40} />
                                </TouchableOpacity>
                            </View>
                        )}


                        <RBSheet
                            height={130}
                            ref={refRBSheet}
                            closeOnDragDown={true}
                            closeOnPressMask={false}
                            customStyles={{
                                wrapper: {
                                    backgroundColor: "transparent"
                                },
                                draggableIcon: {
                                    backgroundColor: "#000"
                                }
                            }}
                        >
                            <TouchableOpacity
                                onPress={handleClose}
                                style={{ position: 'absolute', right: 10, top: 10 }}>
                                <Icon source={icons.delete} size={20} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center', margin: 5 }}>
                                <TouchableOpacity
                                    onPress={handleClickImage}
                                    style={{ paddingVertical: 10, paddingHorizontal: 20, borderStyle: "dashed", borderRadius: 100, alignItems: "center" }}>

                                    <Icon source={icons.camera} size={30} color={colors.Primary} />
                                    <Text>Camera</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={handleImagePicker}
                                    style={{ paddingVertical: 20, paddingHorizontal: 20, borderStyle: "dashed", borderRadius: 100, alignItems: "center" }}>

                                    <Icon source={icons.img} size={30} color={colors.Primary} />
                                    <Text>Image</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ paddingVertical: 20, paddingHorizontal: 20, borderStyle: "dashed", borderRadius: 100, alignItems: "center" }}>

                                    <Icon source={icons.video} size={30} color={colors.Primary} />
                                    <Text>Video</Text>
                                </TouchableOpacity>
                            </View>
                        </RBSheet>
                        <TouchableOpacity
                            onPress={() => handleSumbit(state)}
                            style={{
                                backgroundColor: colors.Primary, justifyContent: "center", alignItems: "center",

                                paddingHorizontal: 5, paddingVertical: 8, borderRadius: 15
                            }}>
                            <Text style={{ color: colors.White, marginHorizontal: 10, fontSize: 20 }}>Save Changes</Text>

                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>

        </View>

    )
}

export default FoodListingForm

