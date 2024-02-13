import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ManageSubcription = ({route}) => {
    console.log("checking route is :==",route.params)
  return (
    <View>
      <Text>ManageSubcription</Text>
    </View>
  )
}

export default ManageSubcription

const styles = StyleSheet.create({})