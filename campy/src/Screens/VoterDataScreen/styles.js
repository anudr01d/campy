import {StyleSheet, Dimensions} from 'react-native';

import {colors} from '../../Styles/colors';
import {scale, verticalScale, moderateScale} from '../../Styles/scale';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  text: {
    color: colors.black,
    fontSize: scale(30),
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: moderateScale(10),
    backgroundColor: colors.lightblue,
    marginTop: verticalScale(30),
    alignItems: 'center',
    width: width - moderateScale(60),
    borderRadius: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});
