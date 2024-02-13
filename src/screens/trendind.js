import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { callAxiosGet } from '../services/api'
import { API_CONSTANTS } from '../assets/config/constant'

const Trending = () => {
    useEffect(() => {
        data()
    }, [])
    const data = () => {
        callAxiosGet(API_CONSTANTS.listingItem).then(res => console.log("checking what is there ", res.data)).catch(err => console.log("checking errror is", err))
    }
    return (
        <View>
            <Text>checking data is</Text>
        </View>
    )
}

export default Trending

const styles = StyleSheet.create({})