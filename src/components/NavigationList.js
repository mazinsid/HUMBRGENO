import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Menu from './Menu';
import DetailsAPi from './DetailsAPi';
import Categories from './Categories';

const NavigationList = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
          
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Details" component={DetailsAPi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationList;
