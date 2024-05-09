import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Skeleton } from 'native-base'

const FoodSkeleton = () => {
    return (
        <View style={{ marginTop: 10, gap: 15,marginVertical:5,marginHorizontal:4 }}>
            <View style={{ flexDirection: 'row', gap: 20 }}>
                <View style={{ position: "absolute", left: 20, zIndex: 9, top: 10, }}>

                    <Skeleton
                        rounded="xl"
                        h={20}
                        w={20}
                        background="#FFC76C"
                    />
                </View>
                <Skeleton
                    rounded="xl"
                    h={200}
                    width={110}

                    background="#F6FEFB"
                >
                </Skeleton>
            </View>

            <View style={{ position: 'absolute', left: 20, bottom: 70 }}>

                <Skeleton
                    h={5}
                    w={75}
                    rounded="sm"
                    background="#FFC76C"
                />
            </View>
            <View style={{ position: 'absolute', left: 20, bottom: 40 }}>

                <Skeleton
                    h={5}
                    w={75}
                    rounded="sm"
                    background="#FFC76C"
                />
            </View>

        </View>

    )
}

export default FoodSkeleton

const styles = StyleSheet.create({})