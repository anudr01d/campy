import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import {userLoggedOut} from '../../Redux/Actions/userAction';
import CustomHeader from '../../Components/customHeader';
import {string} from '../../Config/string';

import {styles} from './styles';

const AnalyticsScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLoggedOut());
  };

  return (
    <>
      <CustomHeader screenName="Analytics" navigation={navigation} /> 
      <View style={styles.container}>
      </View>
    </>
  );
};

export default AnalyticsScreen;
