import React, {Component} from "react";
import { View, Text, StatusBar , StyleSheet, Image} from "react-native";
import Video from "react-native-video";
import {Actions} from 'react-native-router-flux';
import bgVideo from '../../assets/video.mp4';
import styles from './styles';

class InitialScreen extends Component {
  componentDidMount () {
    StatusBar.setHidden(true);
    setTimeout(()=>{
      Actions.push("home_screen");
    },5000);
  }
  componentWillUnmount() {
    StatusBar.setHidden(false);
  }
  render() {
    return (
      <View style={styles.container}>
          <Video  
            muted={false}   
            repeat={false}   
            source={bgVideo}
            resizeMode="cover" 
            style={StyleSheet.absoluteFill} 
          />
          <View style={styles.logoContainer}>
              <Image 
                source={require('../../assets/logo1.png')}
                style={styles.logo}
              />
          </View>
      </View>
    )
  }
}

export default InitialScreen;
