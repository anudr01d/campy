import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../Styles/colors';

const TabBar = ({state, navigation}) => {
  return (
    <View style={styles.tabContainer}>
      {state.routeNames.map((name, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate(name);
        };

        return (
          <TouchableOpacity onPress={onPress} style={styles.tab}  key={index}>
            <Text style={isFocused ? styles.activeTab : styles.tabText}>
              {name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: colors.lightblue,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: colors.white,
  },
  activeTab: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.white,
  },
});
