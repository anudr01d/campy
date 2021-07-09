import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import {ContactScreen, OutreachScreen, VoterDataScreen} from '../Screens';

import TabNavigator from './tabNavigator';

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Voter Data" component={VoterDataScreen} />
      <Drawer.Screen name="Data Analytics"  component={TabNavigator}/>
      <Drawer.Screen name="Outreach" component={OutreachScreen}/>
      <Drawer.Screen name="Contact Us" component={ContactScreen}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
