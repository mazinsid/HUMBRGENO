import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Swiper from 'react-native-swiper';
import Header from '../components/Header';


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
            <ScrollView horizontal={true} style={{width: '100%'}}>
              <FlatList
                numColumns={2}
                data={this.state.dataItems}
                renderItem={({item}) => this._renderItem(item)}
                keyExtractor={(item, index) => index.toString()}
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    );
  }
  _renderCategories(item) {
    return (
      <TouchableOpacity
        style={styles.divCategories}
        onPress={() =>
          this.setState({selectCatg: item.id, categoryName: item.name})
        }>
        <Image
          style={{width: 100, height: 80}}
          resizeMode="contain"
          source={{uri: `https://sharkbs.com/public/storage/${item.image}`}}
        />
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.name}</Text>
      </TouchableOpacity>
    );
  }
  _renderItem(item) {
    let catg = this.state.selectCatg;
    if (catg == 0 || catg == item.category_id) {
      return (
        <TouchableOpacity style={styles.divItems}>
          <Image
            style={styles.imageItem}
            resizeMode="contain"
            source={{uri: `https://sharkbs.com/public/storage/${item.image}`}}
          />
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              // eslint-disable-next-line prettier/prettier
              height: ((width / 2) - 20) - 90,
              // eslint-disable-next-line prettier/prettier
              width: ((width / 2) - 20) - 10,
              backgroundColor: 'transparent',
            }}
          />
          <Text
            style={{fontWeight: 'bold', fontSize: 22, alignItems: 'center'}}>
            {item.name}
          </Text>
          <Text style={{fontSize: 20, color: 'green'}}>${item.price}</Text>
          <TouchableOpacity onPress={() => this.onClickAddCart(item)}>
            <Text>add cart</Text>
          </TouchableOpacity>
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
    width: (width / 2) - 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: 'center',
    borderWidth: 1,
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
  },
  imageItem: {
    // eslint-disable-next-line prettier/prettier
    width: ((width / 2) - 20) - 10,
    // eslint-disable-next-line prettier/prettier
    height: ((width / 2) - 20) - 30,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: -45,
  },
  titleCate: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});
