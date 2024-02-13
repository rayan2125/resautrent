import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../assets/config/colors'
import CustomButton from '../Custom/customButton'

const OrderHistoryCard = () => {
  return (
    <View style={{ marginTop: 10, }}>
      <View style={{ backgroundColor: colors.White, elevation: 9, zIndex: 5, borderRadius: 10 }}>
        <View style={{ margin: 15 }}>

          <Text style={{ color: colors.textColor }}>2024-01-12</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

            <Text style={{ color: colors.textColor }}>Order ID : #123</Text>
            <Text style={{ color: colors.green }}>
              Delivery
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', width: "100%" }}>
            <View style={{ height: 70, width: 70, borderRadius: 100, backgroundColor: "#BABABAAB", justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: colors.green, fontSize: 20, fontWeight: "700" }}>C</Text>
            </View>
            <Text>cscodetech 212, ambika pinneca...</Text>
            <Text>₹ 200</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 20 }}>
            <View style={{ width: '45%' }}>

              <CustomButton
                backgroundColor={colors.cancel}
                btnName="Cancel"
              />
            </View>
            <View style={{ width: '45%' }}>
              <CustomButton
                backgroundColor={colors.green}
                btnName="Info"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default OrderHistoryCard

