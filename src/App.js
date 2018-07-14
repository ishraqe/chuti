import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import  firebase from "firebase";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import ReduxThunk from "redux-thunk";
import Router from "./route/routes";
import Reducers from "./store/reducers/index";

class App extends Component {
  constructor(props) {
    super(props);
    const config = {
      apiKey: "AIzaSyARtwl6wJgu3NYGxZcMTlo7gAcHSBNQ-eg",
      authDomain: "chuti-acdbc.firebaseapp.com",
      databaseURL: "https://chuti-acdbc.firebaseio.com",
      projectId: "chuti-acdbc",
      storageBucket: "chuti-acdbc.appspot.com",
      messagingSenderId: "683534495402"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }
  render() {
    const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{ flex:1 }}>
          <Router />
        </View>
      </Provider>
    );
  }
}

export default App;
