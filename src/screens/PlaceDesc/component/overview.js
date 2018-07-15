import _ from 'lodash';
import React, {Component} from 'react';
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

class overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarkData : [],
      isBookmarked: false
    }
  }
  componentDidMount() {
    AsyncStorage.getItem('bookmark')
    .then(res => {
      const parsedData =JSON.parse(res); 
      this.setState(prevState => ({
        bookmarkData: [...prevState.bookmarkData, parsedData]
      }));
    })
    .catch(err => console.log(err));
  }
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
    const oldBookmarkData = this.state.bookmarkData;
    const id = props.id;
    const newdata = {
      [id] : {
        id: props.id,
        description: props.description,
        guide: props.guide,
        imageUrls: props.imageUrls,
        name:props.placename
      }
    }
    let updateData = [...oldBookmarkData,newdata];
    util.set('bookmark',updateData);
  }
  renderBookmarkIcon= (props) => {
    console.log(this.state.bookmarkData,'not')
    if(typeof this.state.bookmarkData !== 'undefined' && this.state.bookmarkData.length > 0) {
      const id = props.id;
      let isExists = this.state.bookmarkData.some(el=> {
        return el.hasOwnProperty(id);
      });
      if(isExists){
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
  render() {
    const sliderHeight = Math.round(styles.sliderHeight+20);
    return (
      <ParallaxScrollView
        backgroundColor="#fff"
        contentBackgroundColor="#fff"
        parallaxHeaderHeight={sliderHeight}
        renderForeground={() => (
          <View style={styles.sliderContainer}>
            {this.renderSlider(this.props.imageUrls) }
            {this.renderBookmarkIcon(this.props)}
          </View>
        )}
      >
       <ScrollView>
              <View style={styles.infoContainer}>
                  <TextSpaced style={styles.title} letterSpacing={3}>
                        { ` ${'Description'}` }
                  </TextSpaced>
                  <Text style={styles.text}>
                        { this.props.description }
                  </Text>
              </View>
        </ScrollView>
    </ParallaxScrollView>
  )
  }
}

export default overview;