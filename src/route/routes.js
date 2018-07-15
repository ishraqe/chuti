import React, { Component } from "react";
import { View, Text } from "react-native";
import { Router, Scene, Stack } from "react-native-router-flux";

import INScreen from "../screens/InitialScreen/InitialScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import PlaceListScreen from "../screens/PlaceList/PlaceListScreen";
import PlaceDesc from '../screens/PlaceDesc/PlaceDesc';

import {
  primaryFontColor,
  themeFont,
  navFontSize
} from "../styles/globalStyles";

const routes = props => {
  return (
    <Router
      navigationBarStyle={{ backgroundColor: "#fff"}}
      titleStyle={{
        textAlign:'center', 
        alignSelf:'center',
        flex:1,
        fontFamily: themeFont,
        fontWeight: "normal",
        color: primaryFontColor,
        fontSize: navFontSize
      }}
    >
      <Stack key="root" hideNavBar={true}>
        <Stack key="first">
          <Scene 
            key="initial_screen" 
            hideNavBar={true} 
            component={INScreen} 
          />
          <Scene
            initial
            title="Home"
            key="home_screen"
            component={HomeScreen}
          />
          <Scene
            title="Popular Places"
            key="placeList_screen"
            component={PlaceListScreen}
          />
          <Scene
            title="Description"
            key="description_screen"
            component={PlaceDesc}
          />
        </Stack>
      </Stack>
    </Router>
  );
};

export default routes;
