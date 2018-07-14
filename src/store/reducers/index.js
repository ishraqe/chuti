import { combineReducers } from "redux";
import InfoReduce from "./InfoReducers";

export default combineReducers({
  info: InfoReduce
});
