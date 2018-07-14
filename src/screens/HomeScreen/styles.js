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
const cardHeight = height / 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  cardContainer: {
    width: width,
    height: cardHeight,
    backgroundColor: "white"
  },
  imageStyle: {
    height: cardHeight,
    width: width
  },
  textContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: cardHeight,
    backgroundColor: "rgba(0, 0, 0, .5)",
    width: width,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    textAlign: "center",
    fontFamily: fontFamilyBold,
    fontSize: primaryFontSize + 10,
    color: "white"
  }
});

export default styles;
