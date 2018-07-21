import React, { Component } from "react";
import { View, Text } from "react-native";
import { Router, Scene, Stack, Actions } from "react-native-router-flux";

import INScreen from "../screens/InitialScreen/InitialScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import PlaceListScreen from "../screens/PlaceList/PlaceListScreen";
import PlaceDesc from '../screens/PlaceDesc/PlaceDesc';
import BookmarkScreen from '../screens/BookmarkScreen/BookmarkScreen';
import AboutScreen from '../screens/AboutScreen/AboutScreen';


import {
  primaryFontColor,
  themeFont,
  navFontSize
} from "../styles/globalStyles";

const routes = props => {
  return (
    <Router
      navigationBarStyle={{ backgroundColor: "#fff"}}
    >
      <Stack key="root" hideNavBar={true}
        titleStyle={{
          flex:1,
          textAlign:'center', 
          alignSelf:'center',
          fontFamily: themeFont,
          fontWeight: "normal",
          color: primaryFontColor,
          fontSize: navFontSize,
          marginLeft: -5
        }}
      >
        <Stack key="first">
          <Scene 
            key="initial_screen" 
            hideNavBar={true} 
            component={INScreen} 
          />
          <Scene
            title="Home"
            key="home_screen"
            left={()=>null}
            component={HomeScreen}
          />
          <Scene
            title="Popular Places"
            key="placeList_screen"
            component={PlaceListScreen}
            titleStyle= {{
              flex:1,
              textAlign:'center', 
              alignSelf:'center',
              fontFamily: themeFont,
              fontWeight: "normal",
              color: primaryFontColor,
              fontSize: navFontSize,
              marginLeft: -5
            }}
          />
          <Scene
            title="Description"
            key="description_screen"
            component={PlaceDesc}
            titleStyle={{
              flex:1,
              textAlign:'center', 
              alignSelf:'center',
              fontFamily: themeFont,
              fontWeight: "normal",
              color: primaryFontColor,
              fontSize: navFontSize,
              marginLeft: -5
            }}
          />
          <Scene
            title="Bookmarks"
            key="bookmark_screen"
            component={BookmarkScreen}
            titleStyle={{
              flex:1,
              textAlign:'center', 
              alignSelf:'center',
              fontFamily: themeFont,
              fontWeight: "normal",
              color: primaryFontColor,
              fontSize: navFontSize,
              marginLeft: -5
            }}
          />
          <Scene 
            key="about_screen" 
            component={AboutScreen} 
            navigationBarStyle={{ backgroundColor: "#fff", elevation: 0}}
            onLeft={()=>{
              Actions.pop();
            }}
          />
        </Stack>
      </Stack>
    </Router>
  );
};

export default routes;
