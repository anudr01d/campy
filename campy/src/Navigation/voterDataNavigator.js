import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  VoterDataScreen,
  AddEditVoterScreen
} from '../Screens';

const Stack = createStackNavigator();

const VoterDataNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'VoterDataScreen'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="VoterDataScreen" component={VoterDataScreen} />
      <Stack.Screen name="AddEditVoterScreen" component={AddEditVoterScreen} />
    </Stack.Navigator>
  );
};

export default VoterDataNavigator;
