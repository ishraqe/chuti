import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import TextSpaced from 'react-native-letter-spacing';
import Swiper from 'react-native-swiper';
import Icon from "react-native-vector-icons/Ionicons";
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import styles from '../styles';
import SliderDot from './sliderDot';
import util from '../../../utils';

renderSliderImages = (images) => {
  return images.map((eachImage, index) => {
    return (
      <Image
        key={index}
        source={{uri: eachImage}}
        style={styles.slider}
        resizeMode={'cover'}
      />
    )
  })
}
get = async() => {
  console.log('get called');
  let val =  await AsyncStorage.getItem('bookmark');
  let parsed = JSON.parse(val);
}
renderSlider =(images)=>{
     return (
          <Swiper
            loop={false}
            bounces={true}
            dot={<SliderDot />}
            activeDot={<SliderDot active />}
            paginationStyle={{ bottom: 5 }}
          >
            { this.renderSliderImages(images) }
          </Swiper>
        )
}
makeBookmark = (props) => {
  const id = props.id;
  const data = {
    [id] : {
      id: props.id,
      description: props.description,
      guide: props.guide,
      imageUrls: props.imageUrls
    }
  }
  util.set('bookmark',data)
}
renderBookmarkIcon= (props) => {
  this.get();
  const exists = false;
  if(this.get()){
    return (
      <TouchableOpacity
        style={styles.iconStyle}
        onPress={() => this.makeBookmark(props)}
      >
        <Icon 
          name="md-heart"
          size={35} 
          color="red" 
        />
      </TouchableOpacity>
    )
  }
  return (
    <TouchableOpacity
      style={styles.iconStyle}
      onPress={() => this.makeBookmark(props)}
    >
      <Icon 
        name="md-heart-outline"
        size={35} 
        color="red" 
      />
    </TouchableOpacity>
  )
}
const overview = (props) => {
  const sliderHeight = Math.round(styles.sliderHeight+20);
  console.log(sliderHeight);
    return (
      <ParallaxScrollView
        backgroundColor="#fff"
        contentBackgroundColor="#fff"
        parallaxHeaderHeight={sliderHeight}
        renderForeground={() => (
          <View style={styles.sliderContainer}>
            {this.renderSlider(props.imageUrls) }
            {this.renderBookmarkIcon(props)}
          </View>
        )}
      >
       <ScrollView>
              <View style={styles.infoContainer}>
                  <TextSpaced style={styles.title} letterSpacing={3}>
                        { ` ${'Description'}` }
                  </TextSpaced>
                  <Text style={styles.text}>
                        { props.description }
                  </Text>
              </View>
        </ScrollView>
    </ParallaxScrollView>
  )
}

export default overview;