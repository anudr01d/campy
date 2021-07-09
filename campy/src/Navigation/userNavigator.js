import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  AnalyticsScreen,
  VoterDataScreen,
} from '../Screens';

const Stack = createStackNavigator();

const UserNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'AnalyticsScreen'}
      screenOptions={{
        headerShown: false,
      }}>
      { 
      <Stack.Screen name="AnalyticsScreen" component={AnalyticsScreen} />,
      <Stack.Screen name="AnalyticsScreen" component={AnalyticsScreen} />
      }
    </Stack.Navigator>
  );
};

export default UserNavigator;
