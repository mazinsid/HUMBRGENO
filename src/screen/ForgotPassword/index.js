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
import navigation from '../../navigation';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

const navigation = useNavigation();
  const onSendPressed = () => {
    navigation.navigate('NewPassword');
  };

  const onSingInPress = () => {
    navigation.navigate('SingIn');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          placeholder="Enter Your Email"
          value={email}
          setValue={setEmail}
        />
        <CustomButton text="Send" onPress={onSendPressed} />
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

export default ForgotPassword;
