import React from 'react';
import { View, FlatList, TouchableOpacity, Text, ScrollView } from 'react-native';
import colors from '../../assets/config/colors';

export const CustomDropDown = ({ setClicked, onSearch, setSearch, data, onSelect }) => {
  return (
    <View style={{ flex: 1 }}>
      
      <View
        style={{
          elevation: 5,
          marginTop: 20,
          height: 150,
          alignSelf: 'center',
          width: '90%',
          backgroundColor: '#fff',
          borderRadius: 10,
          zIndex: 99,
          position: 'absolute',
          bottom: -120,
        }}>
          <ScrollView 
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          >

        { data && data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: '85%',
              alignSelf: 'center',
              height: 40,
              justifyContent: 'center',
              // borderBottomWidth: 0.5,
              // borderColor: '#8e8e8e',
              // backgroundColor:colors.Primary
            }}
            onPress={() => onSelect(item)}>
            <Text>{item.label}</Text>
          </TouchableOpacity>
        ))}
          </ScrollView>
      </View>
    </View>
  );
};

 export const MultiDrop  = ({ setClicked, onSearch, setSearch, data, onSelect }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          elevation: 5,
          marginTop: 20,
          height: 150,
          alignSelf: 'center',
          width: '90%',
          backgroundColor: '#fff',
          borderRadius: 10,
          zIndex: 99,
          // position: 'absolute',
          bottom:-120,
        }}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                width: '85%',
                alignSelf: 'center',
                height: 40,
                justifyContent: 'center',
                borderBottomWidth: 0.5,
                borderColor: '#8e8e8e',
              }}
              onPress={() => onSelect(item)}>
              <Text>{item.label}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};


