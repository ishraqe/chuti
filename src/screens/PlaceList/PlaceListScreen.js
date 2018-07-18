import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/EvilIcons";
import { View, ScrollView, Animated, Easing } from "react-native";
import PlaceBox from "../../component/PlaceBox/PlaceBox";
import { getPlacesById } from "../../store/actions";
import styles from "./styles";
import { Actions } from "react-native-router-flux";
import LottieView from 'lottie-react-native';


class PlaceListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
      placeInfo: null
    };
  }
  componentDidMount() {
    const id = this.props.place_id;
    this.props.getPlacesList(id);
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
    }).start();
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.placesList !== prevState.placeInfo) {
      return {
        placeInfo: nextProps.placesList
      };
    }
    return null;
  }
  renderPlaceList = () => {
    return this.state.placeInfo.map(eachPlace => {
      return (
        <PlaceBox
          key={eachPlace.id}
          place={eachPlace.info}
          onPress={() => {
            Actions.push('description_screen',{
            imageUrls: eachPlace.info.imageUrls, 
            desc: eachPlace.info.desc, 
            guide: eachPlace.info.guide,
            id: eachPlace.id,
            placename: eachPlace.info.name
          })
          }}  
        />
      );
    });
  }
  renderLoader = () => {
    if (this.state.placeInfo) {  
      return (
        <ScrollView>
          <View style={styles.listContainer}>
            {this.renderPlaceList()}
          </View>
        </ScrollView>
      )
    }
    return (
      <LottieView
        progress={this.state.progress}
        source={require('../../assets/spinner.json')}
      />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderLoader()}
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="#3498db"
            title="Bookmarks"
            onPress={() => {Actions.push('bookmark_screen')}}
          >
            <Icon name="tag" size={35} color="#fff" />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}
PlaceListScreen.propTypes = {
  placesList: PropTypes.array
};

const mapStateToProps = ({ info }) => {
  const placesList = info.placesById;
  return {
    placesList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPlacesList: id => dispatch(getPlacesById(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceListScreen);
