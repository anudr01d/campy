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
  item : { 
    height: 50, 
    flex: 1, 
    alignItems: 'flex-start', 
    margin: 10, 
    justifyContent: 'center',
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
  },
  safearea: {
    flex: 1
  },
  text: {
    color: colors.dimBlack,
    fontSize: scale(16),
    fontWeight: 'bold',
  },
  textInput: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderColor: colors.dimBlack,
    borderRadius: 3,
    padding: 10,
    color: colors.black,
    fontSize: 18,
    backgroundColor: colors.white
  },
  textNormal: {
    color: colors.dimBlack,
    fontSize: scale(17),
    paddingLeft: 10,
    paddingBottom: 10
  },
  textBold: {
    color: colors.dimBlack,
    fontSize: scale(16),
    fontWeight: 'bold',
    padding: 10
  },
  button: {
    paddingVertical: moderateScale(15),
    backgroundColor: colors.lightblue,
    alignItems: 'center',
    width: width - moderateScale(20),
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: 10
  },
  buttonGray: {
    paddingVertical: moderateScale(15),
    backgroundColor: colors.greyTwo,
    alignItems: 'center',
    width: width - moderateScale(20),
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 17
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: colors.dimBlack,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderColor: colors.dimBlack,
    borderRadius: 3,
    padding: 10,
    color: colors.black,
    fontSize: 18,
    backgroundColor: colors.white
  },
  details: {
    backgroundColor: colors.white,
    flex: 1,
    borderColor: colors.dimBlack,
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 20,
    marginEnd: 10
  },
  row: {
    flex: 1,
    flexDirection: "row"
  },
  inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10
  }
});
