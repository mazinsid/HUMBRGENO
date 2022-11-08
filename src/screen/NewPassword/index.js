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

const NewPassword = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate('Home');
  };

  const onSingInPress = () => {
    navigation.navigate('SingIn');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>New Password</Text>
        <CustomInput
          placeholder="Enter Your code"
          value={code}
          setValue={setCode}
        />
        <CustomInput
          placeholder="Enter Your New Password"
          value={newPassword}
          setValue={setNewPassword}
        />
        <CustomButton text="Submit" onPress={onSubmitPressed} />
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

export default NewPassword;
