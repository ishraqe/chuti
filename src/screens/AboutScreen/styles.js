import { StyleSheet, Dimensions } from "react-native";

import {
  margin,
  borderRadius,
  fontFamilyBold,
  themeFont,
  primaryFontColor,
  primaryFontSize,
  navFontSize,
  fontFamilyLight
} from "../../styles/globalStyles";
const { width, height } = Dimensions.get("window");
const cardHeight = height / 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  imageContainer: {
      flex:.5,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
  },
  image: {
      height: cardHeight + 50,
      width: width
  },
  textContainer: {
      flex:2,
      alignItems: 'center'
  },
  versionContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  version: {
    fontFamily: themeFont,
    fontSize:  primaryFontSize + 10,
    color: primaryFontColor
  },
  termsContainer: {
    flex:3
  },
  terms: {
    fontFamily: fontFamilyLight,
    fontSize:  primaryFontSize,
    color: primaryFontColor,
    paddingLeft: 10,
    paddingRight: 10
  },
  thanks: {
    fontFamily: themeFont,
    fontSize:  primaryFontSize + 8,
    color: primaryFontColor,
    padding: 10,
    alignSelf: 'center',
  },
  list: {
    fontFamily: fontFamilyBold,
    fontSize:  primaryFontSize,
    color: '#3498db',
    padding: 10,
    alignSelf: 'flex-start',
  }
});

export default styles;