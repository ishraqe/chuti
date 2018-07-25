import React, { Component } from "react";
import { 
  StyleSheet, 
  Text, View, 
  NetInfo, 
  Animated, Easing,
  TouchableOpacity
} from "react-native";
import  firebase from "firebase";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import LottieView from 'lottie-react-native';

import ReduxThunk from "redux-thunk";
import Router from "./route/routes";
import Reducers from "./store/reducers/index";
import { 
  margin,
  appBackgroundColor, 
  themeFont, 
  themeColor,
  primaryFontSize
} from "./styles/globalStyles";

const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
      isConnected: true
    }
    const config = {
      apiKey: [YOUR API KEY],
      authDomain: [YOUR AUTH DOMAIN],
      databaseURL: [YOUR DATABASE URL],
      storageBucket: [STORAGE BUCKET],
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }
  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
    }).start();
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }
  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }
  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
    }
  } 
  renderpage= () => {
    if (this.state.isConnected) {
      return  <Router />
    }
    return (
      <View style={styles.noInternetContainer}>
          <LottieView
            progress={this.state.progress}
            source={require('./assets/no_internet_connection.json')}
          />
          <Text style={styles.textStyle}>Check your internet connection</Text>
      </View>
    )
  }
  render() {
      return (
        <Provider store={store}>
          <View style={{ flex:1 }}>
            {this.renderpage()}
          </View>
        </Provider>
      );
  }
}


const styles = StyleSheet.create({
  noInternetContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: margin,
    backgroundColor: appBackgroundColor
  },
  textStyle:{
    marginTop: margin*5,
    fontFamily: themeFont,
    color: themeColor,
    fontSize:primaryFontSize+10
  }
})

export default App;
