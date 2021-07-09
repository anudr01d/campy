import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './tabBar';
import UserNavigator from './userNavigator';
import { VoterDataScreen } from '../Screens';

const Tab = createBottomTabNavigator();

//key={Math.random()}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'VoterDataScreen'}
      tabBar={(props) => <TabBar {...props} />}> 
      <Tab.Screen name="Chart View" component={UserNavigator}/>
      <Tab.Screen name="Advanced View" component={UserNavigator}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;
