import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { callAxios, callAxiosGet, callAxiosWithFormData } from '../services/api';
import { API_CONSTANTS } from '../assets/config/constant';
import colors from '../assets/config/colors';
import { Icon } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addFood, addImgUrl } from '../redux/Reducers/foodListingReducers';
import { addUrl } from '../redux/Reducers/imagesReducers';

const Trending = () => {
    let navigation = useNavigation()
    const [data, setData] = useState([]);

    let dispatch = useDispatch()
    const [imageUrls, setImageUrls] = useState({});
let imageUri= require("../assets/images/food2.png")
    // useEffect(() => {
    //     fetchData();
    //     dispatch(addFood(data))
    //     dispatch(addImgUrl(imageUrls))
    // }, []);
    const [foodState, setState] = useState({
        name: "allo Sajbi",
        images: require("../assets/images/food2.png"),
        price: "45",
        foodtype: "veg",
        prefer: "Lunch,Dinner",
        description: "This is Bindi ki Sabji 45 rs in 1 Bowl",
        category: "Indian Food",
        subCategory: "North Indian"
    })
    const handleSubmit = (state) => {
        let formData = new FormData();

        formData.append("name", state.name)
        formData.append("price", state.price)
        formData.append("foodtype", state.foodtype)
        formData.append("prefer", state.prefer)
        formData.append("description", state.description)
        formData.append("category", state.category)
        formData.append("subCategory", state.subCategory)
        formData.append('images',imageUri);

        callAxiosWithFormData(API_CONSTANTS.createItem, formData)
            .then(res => console.log(res.data))
            .catch(err => console.error("Error submitting data:", err));
};

// const fetchData = () => {
//     callAxiosGet(API_CONSTANTS.listingItem)
//         .then(res => {
//             console.log(res)
//             let listFood = res.data.list
//             setData(listFood);

//             fetchAllImages(listFood, res.data.userId);
//         })
//         .catch(err => {
//             console.log("Error fetching data:", err);
//         });
// };

// const fetchImage = async (url) => {

//     try {
//         const response = await fetch(url);
//         return response.url;
//     } catch (error) {
//         console.error('Error fetching image:', error);
//         return null;
//     }
// };

// const fetchAllImages = async (list, userId) => {
//     const urls = {};
//     for (const item of list) {
//         urls[item.foodId] = await fetchImage(`https://click2bite-d08bc9143b9c.herokuapp.com/api/merchant/read/${userId}/${item.image}`);
//     }
//     setImageUrls(urls);

// };

// const renderItem = ({ item }) => {
//     const imageUrl = imageUrls[item.foodId];
//     return (
//         <View style={styles.item}>
//             <Image source={{ uri: imageUrl }} style={styles.image} resizeMode='contain' />
//             <Text>{item.name}</Text>

//             <Text>{item.price}</Text>
//         </View>
//     );
// };

return (
    <>
        <View style={{ flex: 1 }} >
            <View style={{ flex: 1, margin: 10 }}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                        onPress={() => navigation.pop()}
                        style={{ backgroundColor: colors.Primary, height: 45, width: 45, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon source="chevron-left" size={25} color={colors.White} />
                    </TouchableOpacity>
                    <View style={{ marginHorizontal: 100 }}>
                        <Text style={{ color: colors.textColor, fontSize: 20, fontWeight: "700", }}>List of Food</Text>
                    </View>
                </View>
                {/* <FlatList
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        data={data}
                        renderItem={renderItem}
                    // keyExtractor={item => item.foodId.toString()}
                    /> */}
            </View>
            <TouchableOpacity
                onPress={() => handleSubmit(foodState)}
                style={{ backgroundColor: colors.Primary, justifyContent: "center", alignItems: "center" }}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    </>
);
};

export default Trending;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'column',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        width: "48%",
        paddingHorizontal: 10,
        backgroundColor: colors.White,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 10,
        elevation: 5,
        paddingVertical: 5


    },
    image: {
        width: 100,
        height: 60,
        marginBottom: 10,
        borderRadius: 10,
        resizeMode: "contain"
    },
});
