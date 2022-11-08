import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation';

import Login from './src/screen/SingIn';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Navigation />
    </>
  );
};

export default App;
