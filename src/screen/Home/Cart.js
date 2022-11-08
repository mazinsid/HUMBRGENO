/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet,Image,ScrollView , TouchableOpacity, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

var { width } = Dimensions.get('window');

export default class Cart extends Component {

  constructor(props) {
     super(props);
     this.state = {
       dataCart:[],
     };
  }

  componentDidMount(){
    AsyncStorage.getItem("cart").then((cart)=>{
      if (cart !== null )
      {
        const cartItems = JSON.parse(cart)
        this.setState({dataCart:cartItems})
      }
    })
  }

  render() {
    return (
      <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
        <View style={{height:20}} />
         <Text style={{fontSize:28 ,color: 'gray' , fontWeight:'bold'}}>Cart food</Text>
         <View style={{height:10}}/>

          <View style={{backgroundColor:'transparent',flex:1}}>
            <ScrollView>
            {
              this.state.dataCart.map((item ,i)=>{
                return(
                  <View style={{
                    width:width-20,
                    margin:10,
                    flexDirection:'row',
                    borderWidthBottom:2,
                    borderBottom:1,
                    borderColor:"#cccccc"
                    
                    }}>
                    <Image resizeMode={"contain"} style={{width:width/3, height:width/3}} 
                    source={{uri: `https://sharkbs.com/public/storage/${item.item.image}`}}
                    />
                    <View style={{backgroundColor:'transparent', flex:1 ,justifyContent:'space-between'}}>
                      <View>
                      <Text style={{fontSize:20,fontWeight:'bold'}}>{item.item.name}</Text>
                       {/* <Text>{JSON.stringify(item)}</Text> */}
                      </View>
                    
                
                
                  <View style={{
                    backgroundColor:'transparent',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                    }}>
                      <Text style={{
                        fontWeight:'bold',
                        color: "#33c37d",
                        fontSize:20,
                      }}>${item.price*item.quantity}</Text>
      
                      <View style={{flexDirection:'row' , alignItems:'center'}}>
                        <TouchableOpacity onPress={()=> this.onChangeQuat(i,false)}>
                        <Icon name="ios-remove-circle" size={30} color={'#33c37d'}/>
                        </TouchableOpacity>
                          <Text style={{fontWeight:'bold',paddingHorizontal:8}}>{item.quantity}</Text>
                          <TouchableOpacity onPress={()=> this.onChangeQuat(i,true)}>
                          <Icon name="ios-add-circle" size={30} color={'#33c37d'}/>
                          </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
                )
              })
            }
       </ScrollView>
          </View>


          <View style={{height:20}} />
          <Text style={{fontSize:38 ,color:"#33c37d"}}>${this.onLoadTotal()}</Text>

          <View style={{height:20}} />
            <TouchableOpacity
            style={{
              backgroundColor: 'green',
              width:width - 40,
              alignItems: 'center',
              padding:10,
              borderRadius:5,
            }}
              >
              <Text style={{
                fontSize:24,
                fontWeight:'bold',
                color:'white',
              }}>
                checkout
              </Text>
            </TouchableOpacity>
         <View style={{height:10}} />
      </View>
    );
  }

  onLoadTotal(){
    var total = 0
    const cart = this.state.dataCart

    for(var i = 0 ; i < cart.length; i++) {
      total = total + (cart[i].price*cart[i].quantity)
    }
    return total
  }

  onChangeQuat(i,type)
  {
    const cart = this.state.dataCart
    let cont = cart[i].quantity;

    if(type){
      cont = cont + 1
      cart[i].quantity = cont
      this.setState({dataCart:cart})
    }
    else if( type==false&&cont>=2){
      cont = cont - 1
      cart[i].quantity = cont
      this.setState({dataCart:cart})
    }
    else if( type==false&&cont>=1){
      cart.splice(i,1)
      this.setState({dataCart:cart})
    }
  }
}
