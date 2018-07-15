import { margin, appBackgroundColor } from "../../styles/globalStyles";

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
  }
};