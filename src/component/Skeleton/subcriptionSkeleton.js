import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Skeleton } from 'native-base'
import FoodSkeleton from './foodSkeleton'
import SubSubcriptionSkeleton from './subSubcriptionSkeleton'

const SubcriptionSkeleton = () => {
    let data = ["1", "2", "3"]
    return (
        <View style={{ marginTop: 10, gap: 15, }}>
            <View style={{ flexDirection: 'row', gap: 20 }}>
                <View style={{ position: "absolute", left: 5, zIndex: 9, }}>
                    <FlatList
                        data={data}
                        horizontal
                        renderItem={({ item, zIndex }) => {
                            return (
                                <SubSubcriptionSkeleton />
                            )
                        }}
                    />
                </View>
                <Skeleton
                    rounded="md"
                    h={200}
                    width={350}

                    background="#F6FEFB"
                >
                </Skeleton>
            </View>



        </View>
    )
}

export default SubcriptionSkeleton

const styles = StyleSheet.create({})