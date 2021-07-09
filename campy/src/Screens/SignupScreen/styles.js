import {StyleSheet, Dimensions} from 'react-native';

import {moderateScale, scale, verticalScale} from '../../Styles/scale';
import {colors} from '../../Styles/colors';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: moderateScale(30),
    backgroundColor: colors.white,
  },
  mainHeading: {
    color: colors.lightblue,
    fontSize: scale(30),
  },
  subHeading: {
    color: colors.darkGrey,
    fontSize: scale(20),
    marginBottom: verticalScale(20),
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    fontSize: scale(14),
    color: colors.black,
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
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(20),
  },
  login: {
    color: colors.lightblue,
    fontWeight: 'bold',
  },
});
