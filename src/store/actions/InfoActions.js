import { 
  FETCH_DIVISION_LIST,
  FETCH_PLACE_BY_ID,
  REMOVE_PLACES_BY_ID,
  FETCH_PLACE_FROM_BOOKMARK
} from "./types";
import firebase from 'firebase';
import {AsyncStorage} from 'react-native';

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

export const removePlacesByID = () => {
  return (dispatch) => {
    dispatch({ type: REMOVE_PLACES_BY_ID, payload: null});
  }
}

export const getAllBookmarkPlace = () => {
  return (dispatch) => {
    AsyncStorage.getItem('bookmark').then(res => {
      const parsedData = JSON.parse(res);
      dispatch({ type: FETCH_PLACE_FROM_BOOKMARK, payload: parsedData});
    });
  }
}
