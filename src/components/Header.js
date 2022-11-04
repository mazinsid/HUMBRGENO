
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {Categories, COLORS} from '../database/items';

import Material from 'react-native-vector-icons/MaterialIcons';
const Header = () => {
  return (
<View>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Image
        source={require('../database/images/background.png')}
        style={{position: 'absolute', top: 0, left: -100}}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
          }}>
          <Image
            source={require('../database/images/profile.jpg')}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
              borderRadius: 500,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Material
            name="segment"
            style={{
              fontSize: 28,
              color: COLORS.black,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{padding: 20}}>
        <Text
          style={{
            fontSize: 16,
            color: COLORS.black,
            opacity: 0.5,
            fontWeight: '400',
          }}>
          مطعم
        </Text>
        <Text
          style={{
            fontSize: 40,
            color: COLORS.black,
            fontWeight: '600',
            letterSpacing: 2,
          }}>
          هابورقينو
        </Text>
      </View>
    </View>
    
    );
};

export default Header;