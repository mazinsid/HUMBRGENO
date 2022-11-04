import React from 'react';
import {StatusBar} from 'react-native';
import NavigationList from './src/components/NavigationList';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationList />
    </>
  );
};

export default App;
