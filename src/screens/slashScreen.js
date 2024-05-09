import { StyleSheet, Image, Text, View, StatusBar, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import colors from '../assets/config/colors';
import { useSelector } from 'react-redux';

const SlashScreen = () => {
    const navigation = useNavigation();
    const selector = useSelector(state => state.auth.authData);
    const slideAnim = useRef(new Animated.Value(-1000)).current;

    useEffect(() => {
        Animated.timing(
            slideAnim,
            {
                toValue: 0, // Move to the final position (0)
                duration: 2000, // Adjust the duration as needed
                useNativeDriver: true,
            }
        ).start();
    }, [slideAnim]);


    let data = selector === null ? 'Login' : 'Home';
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(data)
        }, 3500);
    }, [])
    return (
        <View style={{ flex: 1, alignItems: "center", backgroundColor: colors.green }}>
            {/* Set status bar color */}
            <StatusBar backgroundColor={colors.green} />
            <Animated.View style={{ transform: [{ translateX: slideAnim }], borderColor: colors.Primary, flex: 1, justifyContent: "center" }}>
                <Image
                    source={require('../assets/images/C2Blogo.png')}
                    resizeMode='contain'
                    style={{ height: 200, backgroundColor: colors.White }}
                />
                <Text style={{ textAlign: "center", color: colors.White, fontSize: 20, fontFamily: "Roboto", fontWeight: "700", letterSpacing: 1 }}>Click Once Eat Months</Text>
            </Animated.View>
            <View style={{ alignItems: "center", }}>
                <Text style={{ color: colors.White, fontSize: 20, fontWeight: '500' }}>Version 1.0.0</Text>
            </View>
        </View>
    );
};

export default SlashScreen;

const styles = StyleSheet.create({});
