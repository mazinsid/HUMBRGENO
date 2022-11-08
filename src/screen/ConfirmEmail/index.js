import {
  View,
  Image,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocailSingInButtons from '../../components/SocialSingInButtons';
import {useNavigation} from '@react-navigation/core';
const ConfirmEmail = () => {
  const [code, setCode] = useState('');

  const navigation = useNavigation();

  const onConfirmPressed = () => {
    navigation.navigate('Home');
  };

  const onResendPress = () => {
    console.warn('resend Pass');
  };

  const onSingInPress = () => {
    navigation.navigate('SingIn');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm Email</Text>
        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />
        <CustomButton text="Confirm" onPress={onConfirmPressed} />
        <CustomButton
          text="Resend Code"
          onPress={onResendPress}
          type="SECONDARY"
        />
        <CustomButton
          text="Back to Sing In"
          onPress={onSingInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#fdb075',
  },
});

export default ConfirmEmail;
