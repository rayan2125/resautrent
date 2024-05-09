import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Skeleton } from 'native-base'

const SubSubcriptionSkeleton = () => {
  return (
    <View style={{ marginTop: 10, gap: 15,marginVertical:5,marginHorizontal:4 }}>
    <View style={{ flexDirection: 'row', gap: 20 }}>
        <View style={{ position: "absolute", left: 15, zIndex: 9, top: 10, }}>

            <Skeleton
                rounded="xl"
                h={20}
                w={20}
                background="#FFC76C"
            />
        </View>
        <Skeleton
            rounded="xl"
            h={170}
            width={105}

            background="#F6FEFB"
        >
        </Skeleton>
    </View>

    <View style={{ position: 'absolute', left: 15, bottom: 50 }}>

        <Skeleton
            h={5}
            w={78}
            rounded="sm"
            background="#FFC76C"
        />
    </View>
    <View style={{ position: 'absolute', left: 15, bottom: 20 }}>

        <Skeleton
            h={5}
            w={78}
            rounded="sm"
            background="#FFC76C"
        />
    </View>

</View>
  )
}

export default SubSubcriptionSkeleton

const styles = StyleSheet.create({})