import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Header from './Header';

import {Categories, COLORS} from '../database/items';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

import NavigationList from './NavigationList';

const renderItems = (data, index) => {
  return (
    <TouchableOpacity
      key={index}
      activeOpacity={0.9}
      style={{
        width: '100%',
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() =>
        navigation.push('Details', {
          name: data.name,
          price: data.price,
          image: data.image,
          size: data.size,
          crust: data.crust,
          delivery: data.delivery,
          ingredients: data.ingredients,
          isTopOftheWeek: data.isTopOftheWeek,
          navigation: navigation,
        })
      }>
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
            {data.name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: COLORS.black,
              opacity: 0.5,
            }}>
            {data.weight}
          </Text>
        </View>
        <View style={{width: 150, height: 150, marginRight: -45}}>
          <Image
            source={data.image}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
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
              style={{fontSize: 12, color: COLORS.black, poddingRight: 5}}
            />
            <Text
              style={{
                fontSize: 15,
                color: COLORS.black,
                fontWeight: 'bold',
              }}>
              {data.rating}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const Home = () => {
  return (
    <View>
      <Header />
      <View style={{flexDirection: 'row'}}>
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
            <View style={{width: 60, height: 60}}>
              {/* <Image
              source={item.image}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'center',
              }}
            /> */}
            </View>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.black,
                fontWeight: '600',
              }}>
              النقاط
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
            <View style={{width: 60, height: 60}}>
              {/* <Image
              source={item.image}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'center',
              }}
            /> */}
            </View>
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
    </View>
  );
};

export default Home;
