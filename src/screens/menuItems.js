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


const MenuItems = () => {


  useEffect(() => {
    fetchData()
    
  }, [])
  let numColumns = 3
  
  let skeletonSub = ['1', '2', '3',]
  const navigation = useNavigation();
  const [data, setData] = useState()
  const [imageUrls, setImageUrls] = useState({});
  const [skeleton, setSkeleton] = useState(true)
  const [screens, setScreens] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkeleton(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

 





  const theme = {
    ...DefaultTheme,
    roundness: 20,
  };
  const handleNavigation = () => {
    navigation.navigate("FoodListingScreen")
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
  

  const fetchImage = async (url) => {

    try {
      const response = await fetch(url);
      return response.url;
    } catch (error) {

      return null;
    }
  };



  const fetchAllImages = async (list, userId) => {
    const urls = {};
    for (const item of list) {
      urls[item.id] = await fetchImage(`https://click2bite-d08bc9143b9c.herokuapp.com/api/merchant/read/${userId}/${item.image}`);
    }
    setImageUrls(urls);

  };







 

 

  




 
  

  return (
    <View style={{ flex: 1, margin: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={{ backgroundColor: colors.Primary, height: 45, width: 45, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
          <Icon source="chevron-left" size={25} color={colors.White} />
        </TouchableOpacity>

        {screens && screens === 1 && <TouchableOpacity
          onPress={()=>handleNavigation()}
          style={{ borderColor: colors.Primary, borderWidth: 5, height: 45, width: 45, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
          <Icon source="plus" size={25} color={colors.Primary} />
        </TouchableOpacity>}
      </View>
      {




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
                disabled={true}
              />;
            }}
          /> :
          (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
                <Text>Please add your subscription list</Text>
                <TouchableOpacity onPress={() => handleNavigation()} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 10 }}>
                  <Text style={{ color: 'white' }}>Add Now</Text>
                </TouchableOpacity>
              </>
            )}
          </View>)



      }














      <View>

      </View>


    </View >
  )
}

export default MenuItems

const styles = StyleSheet.create({})