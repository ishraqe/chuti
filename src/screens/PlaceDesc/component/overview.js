import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  ToastAndroid
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
      bookmarkData : null,
      hasBookmarkData: false,
      isBookmarked: false
    }
  }
  componentDidMount() {
    AsyncStorage.getItem('bookmark')
    .then(res => {
      const parsedData =JSON.parse(res);
      console.log(parsedData,'parsed', 'did mount');
      if (_.isEmpty(parsedData)) {
        this.setState({
          hasBookmarkData: false
        });
      }else {
        this.setState(prevState => ({
          bookmarkData: parsedData,
          hasBookmarkData: true
        }));
      }
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
    let oldBookmarkData = null ;
    if(this.state.bookmarkData) {
      oldBookmarkData = this.state.bookmarkData
    } else {
      oldBookmarkData = [];
    }
    console.log(oldBookmarkData,'old data');
    const id = props.id;
    const newdata = {
      [id] : {
        id: props.id,
        description: props.description,
        guide: props.guide,
        imageUrls: props.imageUrls,
        name:props.placename
      }
    };
    oldBookmarkData.push(newdata);
    console.log(oldBookmarkData, 'with new')
    AsyncStorage.setItem('bookmark',JSON.stringify(oldBookmarkData))
    .then(res => {
      console.log('set', console.log(res));
    })
    .catch(err => console.log(err));
  }
  renderBookmarkIcon= (props) => {
    if(this.state.hasBookmarkData) {
      console.log(this.state.bookmarkData,'data');
      const id = props.id;
      let isExists = this.state.bookmarkData.some((el,i)=> {
        console.log(el.hasOwnProperty(id));
        return el.hasOwnProperty(id);
      });
      console.log(isExists,'is exists');
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
      } else {
        console.log('inside false');

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
    } else {
      console.log('outside true');

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