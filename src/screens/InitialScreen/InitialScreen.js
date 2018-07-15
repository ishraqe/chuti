import React, {Component} from "react";
import { View, Text, StatusBar , StyleSheet} from "react-native";
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
            repeat={true}   
            source={bgVideo}
            resizeMode="cover" style={StyleSheet.absoluteFill} 
          />
          <View style={styles.logoContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>Chuti</Text>
            </View>
          </View>
      </View>
    )
  }
}

export default InitialScreen;
