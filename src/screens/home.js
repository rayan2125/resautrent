import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from 'react-native-paper'
import OrderCard from '../component/order/orderCard'
import colors from '../assets/config/colors'
import OrderMenu from '../component/order/orderMenu'
import { useNavigation } from '@react-navigation/native'
import PieChart from 'react-native-pie-chart'

import axios from 'axios'
import { API_CONSTANTS } from '../assets/config/constant'
import Api from '../services/api'
import icons from '../assets/config/icons'
const Home = () => {

  const selector = ""
  const [dataMode, setDataMode] = useState(1)
  const data = [
    { id: 1, name: "Order", downName: "History", icon: "clipboard-text", img: require("../assets/images/checking-1.png") },
    { id: 2, name: "Order", downName: "Cancelled", icon: "clipboard-remove", img: require("../assets/images/cancel-1.png") },
    { id: 3, name: "Total Menu", downName: "Item", icon: "clipboard", img: require("../assets/images/menu-1.png") },
    { id: 4, name: "Food", downName: "Listing", icon: "clipboard", img: require("../assets/images/healthy-1.png") },
    { id: 5, name: "Subscription", downName: "Users", icon: "account-multiple-plus", img: require("../assets/images/subscriptions-1.png") },
    { id: 6, name: "Trending", downName: "Orders", icon: "clipboard-pulse", img: require("../assets/images/discount-1.png") },
  ]
  const navigation = useNavigation()
  const handleNavigation = (item) => {
    if (item.id === 1) {

      navigation.navigate("OrderHistory")
    }
    else if (item.id === 2) {
      navigation.navigate("OrderCancel")
    }
    else if (item.id === 3) {
      navigation.navigate("MenuItems")
    }
    else if (item.id === 4) {
      navigation.navigate("FoodListingScreen")
    }
    else if (item.id === 5) {
      navigation.navigate("Subcription")
    }
    else if (item.id === 6) {
      navigation.navigate("Trending")
    }
  }
  const handledataMode = (mode) => {
    if (mode === 0) {
      setDataMode(1)
    } else if (mode === 1) {
      setDataMode(0)
    }
  }
  useEffect(() => {
    // callApi()
  }, [])
  const userData = {
    userName: "Dasrh Desai",
    userEmail: "Darshan@gmail.com",
    userPassword: "123567",
    userNumber: "810339993",
    flag: "delivery"
  };
  // const handleClick = () => {
  //   Api.post(API_CONSTANTS.register, userData).then(res => console.log("success or fail", res)).catch(err => console.log(err))
  // }
  const handleProfile=()=>{
    navigation.navigate("Profile")
  }

  const widthAndHeight = 250
  const series = [123, 321, 123, 789, 537]
  const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00']
  return (<>
    {dataMode === 1 && <View style={{ flex: 1, }}>
      <View style={{ backgroundColor: "#027F25", marginBottom: 10, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>

        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', margin: 10, }}>

          <View style={{marginHorizontal:10,}}>
            <Text style={{ color: colors.White, fontSize: 18, fontWeight: '500' }}>
              Hello,
            </Text>
            <Text style={{ color: colors.White, fontSize: 18, fontWeight: '500' }}>Click2Bite Restaurant!</Text>
          </View>
          <View>
            <View style={{width:100,flexDirection:'row'}} >
              <View style={{}}>

              <View style={{ height: 15, width: 15, borderRadius: 100, backgroundColor: colors.green, position: 'absolute', right: 0, zIndex: 9, top: 0, justifyContent: 'center', alignItems: "center", borderColor: colors.White, borderWidth: 1 }}>
                <Text style={{ color: 'white', fontSize: 10, top: -1 }}>13</Text>

              </View>
              <Icon source="bell" color={colors.White} size={30} />
              </View>
            <TouchableOpacity
            onPress={()=>handleProfile()}
            style={{height:30,width:30,backgroundColor:colors.White,borderRadius:100,
              justifyContent:'center',alignItems:'center',
              marginHorizontal:20,borderEndColor:colors.White,borderEndWidth:2,borderBottomColor:colors.White,borderBottomWidth:2,borderStartColor:colors.White,borderStartWidth:2}}>
              
              <Image source={require("../assets/images/checking-1.png")} style={{height:25,width:25,resizeMode:"contain"}}/>
            </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', margin: 10 }}>
          <Text style={{ color: colors.White, fontSize: 18, fontWeight: '500',marginHorizontal:10, }}>7715861852</Text>
          <View>

            <TouchableOpacity
              onPress={() => handledataMode(dataMode)}
              style={{
                marginHorizontal:10,
                backgroundColor: dataMode == 0 ? "red" : "white", flexDirection: "row", paddingHorizontal: 10, paddingVertical: 10,
                borderColor: colors.White, borderWidth: 1,
                borderRadius: 20
              }}>
              {
                dataMode === 1 &&
                <View style={{ backgroundColor: "#34A853", height: 20, width: 20, borderRadius: 100, borderColor: colors.White, borderWidth: 1, }}></View>
              }
              <Text style={{ color: "#34A853", marginHorizontal: 10, fontWeight: '600' }}>{dataMode === 0 ? "offline" : "Online"}</Text>
              {
                dataMode === 0 &&
                <View style={{ backgroundColor: "#A91C1CED", height: 20, width: 20, borderRadius: 100 }}></View>
              }
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', gap: 15, marginTop: 10, margin: 30, marginBottom: 15 }}>

          <OrderCard 
          title="Today"
          textColor={colors.green}
          source={icons.cart}
          />
          <OrderCard
          textColor={colors.Primary}
          title="Pending"
          source={icons.clock}
          />
          <OrderCard
          textColor={colors.red}
          title="Cancel"
          source={icons.cancel}
          />
        </View>
      </View>

      <FlatList
        style={{ margin: 10, }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 10, }}
        data={data}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <OrderMenu
              onPress={() => handleNavigation(item)}
              key={index}
              name={item.name}
              down={item.downName}
              source={item.img}
            />
          );
        }}
      />


    </View>}
    {
      dataMode == 0 &&
      <View style={{ flex: 1, margin: 10 }}>
        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>

          <TouchableOpacity
            onPress={() => handledataMode(dataMode)}
            style={{
              backgroundColor: dataMode == 0 ? "red" : "green", flexDirection: "row", paddingHorizontal: 10, paddingVertical: 10,

              borderRadius: 20
            }}>
            {
              dataMode === 1 &&
              <View style={{ backgroundColor: "#34A853", height: 20, width: 20, borderRadius: 100 }}></View>
            }
            <Text style={{ color: "#000000", marginHorizontal: 10 }}>{dataMode === 0 ? "offline" : "Online"}</Text>
            {
              dataMode === 0 &&
              <View style={{ backgroundColor: "#A91C1CED", height: 20, width: 20, borderRadius: 100 }}></View>
            }
          </TouchableOpacity>
        </View>
        <ScrollView style={{ flex: 1, }}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.title}>Weeakly</Text>
            <PieChart widthAndHeight={widthAndHeight} series={series} sliceColor={sliceColor} />
            <Text style={styles.title}>montly</Text>
            <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
              coverRadius={0.45}
              coverFill={'#FFF'}
            />
          </View>
        </ScrollView>
      </View>
    }
  </>
  )
}

export default Home

const styles = StyleSheet.create({})