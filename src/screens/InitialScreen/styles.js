import { StyleSheet, Dimensions } from "react-native";

import {
  margin,
  borderRadius,
  fontFamilyBold,
  themeFont,
  primaryFontColor,
  primaryFontSize
} from "../../styles/globalStyles";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    logoContainer: {
        position: 'absolute',
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        height: height,
        width:width,
        justifyContent: 'center',
        alignItems: 'center'

    },
    nameContainer: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        height: width-80,
        width: width-80,
        borderRadius: (width-80)/2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontFamily: themeFont,
        color: '#42f4d7',
        fontSize: primaryFontSize + 30
    }
});

export default styles;