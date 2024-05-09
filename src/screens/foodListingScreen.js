import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import colors from '../assets/config/colors';
import { Icon } from 'react-native-paper';
import icons from '../assets/config/icons';
import { useNavigation } from '@react-navigation/native';
import FoodListingForm from '../pages/foodListing';

const FoodListingScreen = () => {



  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('FoodListingForm');
  };

const handledata = ()=>{

}

  return (
    <View style={{ flex: 1, margin: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={{ backgroundColor: colors.Primary, height: 45, width: 45, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
          <Icon source="chevron-left" size={25} color={colors.White} />
        </TouchableOpacity>
        {/* {
          foodListSelector.length > 0 &&
          <TouchableOpacity
            onPress={handleNavigation}
            style={{ borderColor: colors.Primary, borderWidth: 5, height: 45, width: 45, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
            <Icon source="plus" size={25} color={colors.Primary} />
          </TouchableOpacity>
        } */}
      </View>
      {/* {
        foodListSelector.length > 0 ?
          <FlatList
            showsVerticalScrollIndicator={false}
            data={foodListSelector}

            renderItem={({ item, index }) => {
              return <CustomListing
                source={{ uri: item.photos?.[0] }}
                foodName={item.mealName}
                foodPrice={item.price}
                key={index} />;
            }}
          />
          :
          <FoodListingForm />
      } */}
<FoodListingForm/>
    </View>
  );
};

export default FoodListingScreen;

const styles = StyleSheet.create({});
