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
    color: colors.dimBlack,
    fontSize: scale(22),
    fontWeight: 'bold',
    marginLeft: 12,
    marginTop: 12,
    marginEnd: 12
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
  input: {
    margin: 12,
    borderWidth: 1,
    borderColor: colors.dimBlack,
    borderRadius: 3,
    padding: 10,
    color: colors.black,
    fontSize: 18,
    backgroundColor: colors.white,
    textAlignVertical: "top"
  },
});
