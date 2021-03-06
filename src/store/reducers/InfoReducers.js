import { 
  FETCH_DIVISION_LIST, 
  FETCH_PLACE_BY_ID,
  REMOVE_PLACES_BY_ID,
  FETCH_PLACE_FROM_BOOKMARK
} from "../actions/types";

const INITIAL_STATE = {
  divisionList: null,
  placesById: null,
  bookmarkedPlaces: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DIVISION_LIST:
      return { ...state, divisionList: action.payload };
    case FETCH_PLACE_BY_ID:
      return {...state,placesById: action.payload };
    case REMOVE_PLACES_BY_ID:
      return {...state,placesById: null };
    case FETCH_PLACE_FROM_BOOKMARK:
    console.log(action.payload)
    return { ...state, bookmarkedPlaces: action.payload };  
    default:
      return state;
  }
};
