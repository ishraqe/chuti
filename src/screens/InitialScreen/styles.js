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
        // backgroundColor: 'rgba(0,0,0,0.4)',
        height: height,
        width:width,
        justifyContent: 'center',
        alignItems: 'center'

    },
    logo: {
        height: height /2,
        width: width - 50
    }
});

export default styles;