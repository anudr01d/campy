import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerMenu} from '../Components/DrawerMenu'

const Drawer = createDrawerNavigator();

import {AnalyticsScreen, ContactScreen, OutreachScreen, VoterDataScreen} from '../Screens';
import VoterDataNavigator from './voterDataNavigator';


// const DrawerNavigator = createDrawerNavigator(
//   {
//     VoterDataNavigator: VoterDataNavigator,
//     DataAnalytics: AnalyticsScreen,
//     Outreach: OutreachScreen,
//     Contact: ContactScreen
//   },
//   {
//     initialRouteName: "VoterDataNavigator",
//     drawerBackgroundColor: "lightblue",
//     contentOptions: {
//       activeTintColor: "red"
//     },
//     contentComponent: DrawerMenu
//   }
// );

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Voter Data" component={VoterDataNavigator} />
      <Drawer.Screen name="Data Analytics"  component={AnalyticsScreen}/>
      <Drawer.Screen name="Outreach" component={OutreachScreen}/>
      <Drawer.Screen name="Contact Us" component={ContactScreen}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
