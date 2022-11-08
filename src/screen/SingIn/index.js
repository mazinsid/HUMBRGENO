import {
  View,
  Image,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/logo.jpeg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSingInButtons from '../../components/SocialSingInButtons';
import {useNavigation} from '@react-navigation/native';
const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSingInPressed = () => {
    navigation.navigate('Home');
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };
  const onSingUpPress = () => {
    navigation.navigate('SingUp');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="User Name"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton text="sing in" onPress={onSingInPressed} />
        <CustomButton
          text="Password Pressed ?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <SocialSingInButtons />
      </View>
      <CustomButton
        text="Don't have an account ? Create Account"
        onPress={onSingUpPress}
        type="TERTIARY"
      />
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
});

export default SignIn;
