import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={{ backgroundColor: "#FEF8E6", borderBottomLeftRadius: 20, borderBottomRightRadius: 20,}}>

            <View style={{ margin: 10,flexDirection:'row',}}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                >

                    <Icon source="less-than"
                        size={20}
                    />
                </TouchableOpacity>
                <View style={{alignSelf:'center',alignItems:"center",width:"100%"}}>

                <Text style={{alignItems:'center',}}>3 New Orders</Text>
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})