import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    FlatList,
} from 'react-native'
import { Icon } from 'react-native-paper'
import colors from '../../assets/config/colors'

export default OrderMenu = ({ name, down, source,onPress     }) => {





    return (
        <TouchableOpacity style={styles.container}
        onPress={onPress}
        >

            <View style={styles.card}>
                <View style={styles.cardHeader}>

                    <View style={styles.iconContainer}>
                        <Icon source={source}
                            color='white'
                            size={30}
                        />
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
                        <Text style={{ color: colors.green, fontSize: 16, fontWeight: "700" }}>{name}</Text>
                        <Text style={{ color: colors.green, fontSize: 16, fontWeight: "700" }}>{down}</Text>
                    </View>

                </View>




            </View>


        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,


    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: '#E6E6E6',
    },
    listContainer: {
        alignItems: 'center',
    },
    separator: {
        marginTop: 10,
    },
    iconContainer: {

        top: -35,

        backgroundColor: colors.Primary,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        // marginBottom: 20, 
    },
    /******** card **************/
    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 2,
        },
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        shadowOpacity: 0.5,
        shadowRadius: 4,
        marginVertical: 8,
        backgroundColor: '#FEF8E6',
        flexBasis: '40%',
        marginHorizontal: 10,
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        justifyContent: "center", alignItems: 'center'

    },








})