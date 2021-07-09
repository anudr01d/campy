import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {string} from '../../Config/string';

import {styles} from './styles';

const SignupScreen = ({navigation}) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>{string.register}</Text>
      <Text style={styles.subHeading}>{string.register_account}</Text>

      <TextInput
        style={styles.input}
        value={fname}
        placeholder="First Name"
        onChangeText={(e) => setFname(e)}
      />
      <TextInput
        style={styles.input}
        value={lname}
        placeholder="Last Name"
        onChangeText={(e) => setLname(e)}
      />
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Email"
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        style={styles.input}
        value={phoneNumber}
        placeholder="Phone Number"
        keyboardType="numeric"
        onChangeText={(e) => setPhoneNumber(e)}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Password"
        onChangeText={(e) => setPassword(e)}
      />

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>{string.register.toUpperCase()}</Text>
      </TouchableOpacity>
      <View style={styles.bottomView}>
        <Text>{string.have_account}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.login}>{string.login}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;
