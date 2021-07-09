import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {userLoggedIn} from '../../Redux/Actions/userAction';
import {string} from '../../Config/string';

import {styles} from './styles';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({email: false, password: false});
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (email !== '' && password !== '') {
      try {
        dispatch(userLoggedIn());
      } catch (e) {
        console.log('error while login>>>', e);
      }
    } else if (email === '') {
      setError({...error, email: true});
    } else {
      setError({...error, password: true});
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>{string.login}</Text>
      <Text style={styles.subHeading}>{string.login_account}</Text>

      <TextInput
        style={styles.input}
        value={email}
        placeholder="Email"
        onChangeText={(e) => {
          setEmail(e);
          setError({...error, email: false});
        }}
      />
      {error.email && (
        <Text style={styles.errorText}>** Please enter email</Text>
      )}
      <View style={styles.passwordInput}>
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Password"
          onChangeText={(e) => {
            setPassword(e);
            setError({...error, password: false});
          }}
        />
        {error.password && (
          <Text style={styles.errorText}>** Please enter password</Text>
        )}
        {/* <TouchableOpacity style={styles.forgotText}>
          <Text style={styles.blueText}>{string.forgot_password}</Text>
        </TouchableOpacity> */}
      </View>

      <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
        <Text style={styles.buttonText}>{string.login.toUpperCase()}</Text>
      </TouchableOpacity>
      {/* <View style={styles.bottomView}>
        <Text>{string.dont_have_account}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
          <Text style={styles.blueText}>{string.register}</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default LoginScreen;
