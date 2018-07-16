import { Dimensions } from 'react-native'

import {
  primaryFontColor,
  primaryFontSize,
  fontFamily,
  fontFamilyLight,
  margin,
  appBackgroundColor
} from '../../styles/globalStyles';

// maintaining a 16:10 aspect ratio
const { width } = Dimensions.get('window')
const sliderWidth = width
const sliderHeight = width * (10/16)
export default {
      sliderHeight : sliderHeight,
     container: {
       flex: 1,
       backgroundColor: appBackgroundColor
     },
     sliderContainer: {
       height: sliderHeight,
       width: sliderWidth
     },
     slider: {
       height: sliderHeight,
       width: sliderWidth
     },
     infoContainer: {
          marginTop: 2,
          marginBottom: 24,
          marginLeft: margin,
          marginRight: margin
        },
        title: {
          marginBottom: 10,
          fontFamily: fontFamilyLight,
          fontSize: 32,
          color: primaryFontColor
        },
      
        text: {
          marginLeft: 8,
          marginRight: 8,
          fontSize: primaryFontSize,
          lineHeight: 24,
          color: primaryFontColor
        },
        iconStyle: {
          position: 'absolute',
          top:10,
          right: 10,
          zIndex: 10
        }
};