import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

import Tabs from 'react-native-scrollable-tab-view';
import {BoxShadow} from 'react-native-shadow';
import Overview from './component/overview';
import Path from './component/path';
import {
     appBackgroundColor, 
     themeColor, 
     themeFont
} from '../../styles/globalStyles';

const PlaceDesc =(props) => {
    console.log(props.placename,'desc');
    return (
        <Tabs
            tabBarPosition='bottom'
            tabBarUnderlineStyle = {{
                backgroundColor: themeColor
            }}
            tabBarTextStyle={{
                fontFamily: themeFont,
                fontWeight:'normal',
                fontSize:24,
                color: '#000'
            }}
            style={{
                backgroundColor: 'rgb(237, 242, 250)',
                zIndex: 2
            }}
        >
            <Overview 
                tabLabel="Overview"  
                placename={props.placename}
                description={props.desc} 
                imageUrls = {props.imageUrls}
                id= { props.id}
                guide={props.guide}  
            />
            <Path tabLabel="Guide"  guide={props.guide}/>
        </Tabs>
    )   
};


export default PlaceDesc;