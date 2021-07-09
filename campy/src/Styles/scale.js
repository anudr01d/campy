import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const BASE_DIMENSIONS = {
  mobile: {
    width: 360,
    height: 640,
  },
};

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = BASE_DIMENSIONS.mobile.width;
const guidelineBaseHeight = BASE_DIMENSIONS.mobile.height;

let updatedHeight = height;
let updatedWidth = width;

// Fix max height to 812 to avoid overscaling.
updatedHeight =
  updatedHeight > 812 ? updatedHeight * (667 / 812) : updatedHeight;
updatedWidth = updatedHeight * (guidelineBaseWidth / guidelineBaseHeight);

const normalizedWidth = (size) => (updatedWidth / guidelineBaseWidth) * size;
const normalizedHeight = (size) => (updatedHeight / guidelineBaseHeight) * size;

const scale = (size) => normalizedWidth(size);
const verticalScale = (size) => normalizedHeight(size);
const moderateScale = (size, factor = 0.5) =>
  size + (normalizedWidth(size) - size) * factor;

export {scale, verticalScale, moderateScale};
