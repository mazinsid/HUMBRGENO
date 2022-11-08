import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  VirtualizedList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Swiper from 'react-native-swiper';
import Header from '../../components/Header';
import {COLORS} from '../../database/items';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

var {height, width} = Dimensions.get('window');
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBanner: [],
      dataCategories: [],
      dataItems: [],
      selectCatg: 0,
      categoryName: '',
    };
  }

  componentDidMount() {
    const url = 'https://sharkbs.com/api/CategoryInfo';
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataCategories: responseJson.categories,
          dataItems: responseJson.items,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <ScrollView>
        <View style={{flex: 1}}>
          <Header />
          <View
            style={{
              width: width,
              borderRadius: 20,
              paddingVertical: 20,
              backgroundColor: 'white',
            }}>
            <Text style={styles.titleCate}>
              الآصناف {this.state.categoryName}
            </Text>

            <FlatList
              horizontal={true}
              data={this.state.dataCategories}
              renderItem={({item}) => this._renderCategories(item)}
              keyExtractor={(item, index) => index.toString()}
            />
            <ScrollView>
              {this.state.dataItems.map((item, index) =>
                this._renderItem(item),
              )}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    );
  }
  _renderCategories(item) {
    return (
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
        onPress={() =>
          this.setState({selectCatg: item.id, categoryName: item.name})
        }>
        <View style={{width: 60, height: 60}}>
          <Image
            style={{width: '100%', height: '100%', resizeMode: 'center'}}
            source={{uri: `https://sharkbs.com/public/storage/${item.image}`}}
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
    );
  }
  _renderItem(item) {
    let catg = this.state.selectCatg;
    if (catg == 0 || catg == item.category_id) {
      return (
        <TouchableOpacity activeOpacity={0.9} style={styles.divItems}>
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
                  display: item.isTopOftheWeek ? 'flex' : 'none',
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
                style={styles.imageItem}
                source={{
                  uri: `https://sharkbs.com/public/storage/${item.image}`,
                }}
              />
            </View>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                // // eslint-disable-next-line prettier/prettier
                // height: ((width / 2) - 20) - 90,
                // // eslint-disable-next-line prettier/prettier
                // width: ((width / 2) - 20) - 10,
                // backgroundColor: 'transparent',
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
                  {item.rating}
                </Text>
              </View>
            </View>
          </View>
          {/* <TouchableOpacity onPress={() => this.onClickAddCart(item)}>
            <Text>add cart</Text>
          </TouchableOpacity> */}
        </TouchableOpacity>
      );
    }
  }
  onClickAddCart(data) {
    const itemCart = {
      item: data,
      quantity: 1,
      price: data.price,
    };

    AsyncStorage.getItem('cart')
      .then(dataCart => {
        if (dataCart !== null) {
          const cart = JSON.parse(dataCart);
          cart.push(itemCart);
          AsyncStorage.setItem('cart', JSON.stringify(cart));
        } else {
          const cart = [];
          cart.push(itemCart);
          AsyncStorage.setItem('cart', JSON.stringify(cart));
        }
        alert('تم الآضافة في الطلب');
      })
      .catch(error => {
        alert(error);
      });
  }
}
const styles = StyleSheet.create({
  divCategories: {
    width: 120,
    height: 180,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
    elevation: 5,
  },
  divItems: {
    // eslint-disable-next-line prettier/prettier
    // width: (width / 2) - 20,
    // backgroundColor: 'white',
    // padding: 10,
    // borderRadius: 10,
    // marginTop: 55,
    // marginBottom: 5,
    // marginLeft: 10,
    // alignItems: 'center',
    // borderWidth: 1,
    // elevation: 8,
    // shadowOpacity: 0.3,
    // shadowRadius: 50,
    width: '100%',
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageItem: {
    // eslint-disable-next-line prettier/prettier
    // width: ((width / 2) - 20) - 10,
    // // eslint-disable-next-line prettier/prettier
    // height: ((width / 2) - 20) - 30,
    // backgroundColor: 'transparent',
    // position: 'absolute',
    // top: -45,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  titleCate: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});
