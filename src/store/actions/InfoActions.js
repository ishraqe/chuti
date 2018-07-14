import { 
  FETCH_DIVISION_LIST,
  PLACES_BY_ID, 
  FETCH_PLACE_BY_ID,
  SEARCH_RESULT,
  SEARCH_RESULT_FOUND,
  SEARCH_RESULT_NOT_FOUND
} from "./types";
import _ from "lodash";
import firebase from 'firebase';

export const getDivisionList = () => {
  return (dispatch) => {
    firebase.database().ref('divisions/')
        .on('value', snapshot => {
          let divisionsArray = []
          for(key in snapshot.val()) {
            divisionsArray.push({
              id: key,
              name: snapshot.val()[key].name,
              thumb: snapshot.val()[key].thumb,
            });
          }
            // const divisionsArray = Object.values(snapshot.val())
            dispatch({ type: FETCH_DIVISION_LIST, payload: divisionsArray});
        });
    };
};
export const getPlacesById = id => {
  return (dispatch) => {
    firebase.database().ref('places/').child(id)
    .on('value', snapshot => {
        // console.log(snapshot.val());
        let placeArray = []
        const placesObj = snapshot.val();
        for(key in placesObj) {
          placeArray.push({
            id: key,
            info: placesObj[key]
          })
        }

        dispatch({ type: FETCH_PLACE_BY_ID, payload: placeArray});
    });
};
};
