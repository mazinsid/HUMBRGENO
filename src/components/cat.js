import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {Categories, COLORS} from '../database/items';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const renderCategories = ({navigation}) => {

  const [currentSelected, setCurrentSelected] = useState([0]);
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => setCurrentSelected(index)}>
      <View
        style={{
          width: 120,
          height: 180,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor:
            currentSelected == index ? COLORS.accent : COLORS.white,
          borderRadius: 20,
          margin: 10,
          elevation: 5,
        }}>
        <View style={{width: 60, height: 60}}>
          <Image
            source={item.image}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'center',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 16,
            color: COLORS.black,
            fontWeight: '600',
          }}>
          {item.name}
        </Text>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 100,
            backgroundColor:
              currentSelected == index ? COLORS.white : COLORS.black,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome
            name="angle-right"
            style={{
              fontSize: 12,
              color: currentSelected == index ? COLORS.black : COLORS.white,
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const categories = ({item, index}) => {
  const [currentSelected, setCurrentSelected] = useState([0]);
  return (
    <FlatList
    horizontal={true}
    data={Categories}
    renderItem={renderCategories}
    showsHorizontalScrollIndicator={false}
  />
  );
};

export default categories;
