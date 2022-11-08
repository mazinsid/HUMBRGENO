import {View, Text} from 'react-native';
import React from 'react';
import SingIn from '../screen/SingIn';
import SingUp from '../screen/SingUp';
import ConfirmEmail from '../screen/ConfirmEmail';
import ForgotPassword from '../screen/ForgotPassword';
import NewPassword from '../screen/NewPassword';
import Home from '../screen//Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SingIn" component={SingIn} />
        <Stack.Screen name="SingUp" component={SingUp} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default navigation;
