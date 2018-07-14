import { INFO, FETCH_DIVISION_LIST, FETCH_PLACE_BY_ID } from "../actions/types";

const INITIAL_STATE = {
  info: null,
  divisionList: null,
  placesById: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INFO:
      return state;
    case FETCH_DIVISION_LIST:
      return { ...state, divisionList: action.payload };
    case FETCH_PLACE_BY_ID:
      return { ...state, placesById: action.payload };
    default:
      return state;
  }
};
