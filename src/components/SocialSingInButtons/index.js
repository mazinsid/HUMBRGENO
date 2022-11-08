import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';
const index = () => {
  const onSingInFacebook = () => {
    console.warn('Sing in With Facebook');
  };
  const onSingInGoogle = () => {
    console.warn('Sing in With Google');
  };
  return (
    <>
      <CustomButton
        text="Sing In with Facebook"
        onPress={onSingInFacebook}
        bgColor="#e7eaf4"
        fgColor="#4765a9"
      />
      <CustomButton
        text="Sing In with Google"
        bgColor="#fae9ea"
        fgColor="#dd4d44"
      />
    </>
  );
};

export default index;
