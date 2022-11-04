import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../database/items';
// import axios from 'axios';

import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const DetailsAPi = ({route, navigation}) => {
  const {catId} = route.params;

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({id: catId}),
  };

  const submitData = async () => {
    try {
      const response = await fetch(
        'https://sharkbs.com/api/getItems',
        requestOptions,
      );
      const json = await response.json();
      setData(json.items);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    submitData();
  }, []);

  return (
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
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                width: '100%',
                height: 180,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              // onPress={() => {
              //   navigation.navigate('Details', {
              //     catId: item.id,
              //   });
              // }}
              // activeOpacity={0.9}
            >
              <View
                style={{
                  width: '90%',
                  height: 160,
                  backgroundColor: COLORS.white,
                  borderRadius: 20,
                  elevation: 4,
                  position: 'relative',
                  padding: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={{marginBottom: 50}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      display: data.isTopOftheWeek ? 'flex' : 'none',
                    }}>
                    <FontAwesome
                      name="crown"
                      style={{
                        fontSize: 10,
                        color: COLORS.accent,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        color: COLORS.black,
                        opacity: 0.8,
                        marginLeft: 5,
                      }}>
                      to of the week
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 22,
                      color: COLORS.black,
                      fontWeight: 'bold',
                      paddingTop: 10,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: COLORS.black,
                      opacity: 0.5,
                    }}>
                    {item.weight}
                  </Text>
                </View>
                <View style={{width: 150, height: 150, marginRight: -45}}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'center',
                    }}
                    source={{
                      uri: `https://sharkbs.com/public/storage/${item.image}`,
                    }}
                  />
                </View>
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 85,
                      height: 50,
                      backgroundColor: COLORS.accent,
                      borderTopRightRadius: 20,
                      borderBottomLeftRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Entypo
                      name="plus"
                      style={{
                        fontSize: 18,
                        color: COLORS.black,
                        paddingRight: 5,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft: 20,
                    }}>
                    <AntDesign
                      name="star"
                      style={{
                        fontSize: 12,
                        color: COLORS.black,
                        poddingRight: 5,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 15,
                        color: COLORS.black,
                        fontWeight: 'bold',
                      }}>
                      {item.rating}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default DetailsAPi;
