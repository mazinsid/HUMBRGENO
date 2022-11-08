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
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeate] = useState('');
  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail');
  };

  const onSingInPress = () => {
    navigation.navigate('SingIn');
  };

  const onTermsOfUse = () => {
    console.warn('onTermsOfUse');
  };
  const onPrivacy = () => {
    console.warn('onPrivacy');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>أنشاء حساب</Text>
        <CustomInput
          placeholder="User Name"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="password"
          value={passwordRepeat}
          setValue={setPasswordRepeate}
          secureTextEntry
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUse}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacy}>
            Privacy Policy
          </Text>
        </Text>
        <SocailSingInButtons />
        <CustomButton
          text="have an account ? Sing In"
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

export default SignUp;
