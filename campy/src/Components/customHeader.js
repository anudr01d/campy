import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

import {images} from '../Assets/images';
import {colors} from '../Styles/colors';
import {moderateScale, scale, verticalScale} from '../Styles/scale';

const {width, height} = Dimensions.get('window');

const CustomHeader = ({screenName, navigation, backArrow = false}) => {
  const handleIcon = () => {
    if (backArrow) {
      navigation.goBack();
    } else {
      navigation.toggleDrawer();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={() => handleIcon()}>
        <Image
          style={styles.iconImage}
          source={backArrow ? images.backArrow : images.menu}
        />
      </TouchableOpacity>
      <Text style={styles.header}>{screenName}</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: height * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
  },
  header: {
    fontSize: scale(20),
    color: colors.black,
    fontWeight: 'bold',
    flex: 1,
  },
  icon: {
    marginHorizontal: moderateScale(20),
  },
  iconImage: {
    width: verticalScale(20),
    height: verticalScale(20),
  },
});
