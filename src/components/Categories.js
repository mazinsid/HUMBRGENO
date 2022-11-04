import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Header from './Header';
import {COLORS} from '../database/items';
import {useNavigation} from '@react-navigation/native';

const Categories = () => {
  const navigation = useNavigation();
  const [currentSelected, setCurrentSelected] = useState([0]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setLoading] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState([]);
  const getCategories = async () => {
    try {
      const response = await fetch('https://sharkbs.com/api/CategoryInfo');
      const json = await response.json();
      setData(json.categories);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getCategories();
  }, []);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white,
      }}>
      <Header />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          horizontal={true}
          style={{flexDirection: 'row'}}
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                width: 120,
                height: 180,

                backgroundColor: COLORS.accent,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                borderRadius: 20,
                margin: 10,
                elevation: 5,
              }}
              onPress={() => {
                navigation.navigate('Details', {
                  catId: item.id,
                });
              }}
              >
              <View style={{width: 60, height: 60}}>
                <Image
                  style={{width: '100%', height: '100%', resizeMode: 'center'}}
                  source={{
                    uri: `https://sharkbs.com/public/storage/${item.image}`,
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
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FontAwesome
                  name="angle-right"
                  style={{
                    fontSize: 12,
                  }}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      )}
      <TouchableOpacity activeOpacity={0.9}>
        <View
          style={{
            width: 120,
            height: 180,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: COLORS.accent,
            borderRadius: 20,
            margin: 10,
            elevation: 5,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: COLORS.black,
              fontWeight: '600',
            }}>
            القائمة
          </Text>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              backgroundColor: COLORS.white,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome
              name="angle-right"
              style={{
                fontSize: 12,
                color: COLORS.black,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Categories;
