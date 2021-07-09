import React, {useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  BackHandler,
} from 'react-native';

import {moderateScale, verticalScale} from '../Styles/scale';
import {colors} from '../Styles/colors';

const PopUpModal = ({isPopUp, setIsPopUp, title, content}) => {
  const handleOnPress = useCallback(
    (flag) => () => setIsPopUp(flag),
    [setIsPopUp],
  );

  return (
    <Modal
      visible={isPopUp}
      transparent={true}
      onRequestClose={handleOnPress(!isPopUp)}>
      <View style={styles.container}>
        <View style={styles.popUpContainer} activeOpacity={1}>
          <View style={styles.popUpTitle}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <Text style={styles.popUpBody}>{content}</Text>
          <TouchableOpacity
            style={styles.okButton}
            onPress={() => BackHandler.exitApp()}>
            <Text style={styles.okText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PopUpModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dimBlack,
    flex: 1,
    justifyContent: 'center',
  },
  popUpContainer: {
    backgroundColor: colors.snow,
    borderRadius: 5,
    alignSelf: 'center',
    width: moderateScale(310),
    minHeight: verticalScale(125),
    padding: moderateScale(15),
  },
  popUpTitle: {
    marginBottom: verticalScale(8),
    justifyContent: 'center',
  },
  popUpBody: {
    color: colors.greyTwo,
  },
  okButton: {
    alignSelf: 'flex-end',
    padding: moderateScale(10),
  },
  okText: {
    color: colors.lightblue,
    fontWeight: 'bold',
  },
});
