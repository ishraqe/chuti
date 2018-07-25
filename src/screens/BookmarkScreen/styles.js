import { margin, appBackgroundColor, themeFont, navFontSize, themeColor } from "../../styles/globalStyles";

export default {
  container: {
    flex: 1,
    backgroundColor: appBackgroundColor
  },

  listContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: margin,
    paddingRight: margin,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  notFoundBookmarkContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontFamily: themeFont,
    fontWeight: "normal",
    color: themeColor,
    fontSize: navFontSize,
    alignSelf: 'center'
  }
};
