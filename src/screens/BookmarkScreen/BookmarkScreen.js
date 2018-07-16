import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/EvilIcons";
import { View, ScrollView, Text } from "react-native";
import PlaceBox from "../../component/PlaceBox/PlaceBox";
import { getAllBookmarkPlace } from "../../store/actions";
import styles from "./styles";
import { Actions } from "react-native-router-flux";

class BookmarkScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeInfo: null
    };
  }
  componentDidMount() {
    this.props.getBookmarkedPlacesList();
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
    if (this.state.placeInfo) { 
      
      return this.state.placeInfo.map(eachPlace => {
        for (var key in eachPlace) {
            
           return (
                <PlaceBox
                    key={eachPlace[key].id}
                    place={eachPlace[key]}
                    onPress={() => {
                      Actions.push('description_screen',{
                          imageUrls: eachPlace[key].imageUrls, 
                          desc: eachPlace[key].description, 
                          guide: eachPlace[key].guide,
                          id: eachPlace[key].id
                          })
                      }}  
                />
            );
        }
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.listContainer}>{this.renderPlaceList()}</View>
        </ScrollView>
      </View>
    );
  }
}
BookmarkScreen.propTypes = {
  placesList: PropTypes.array
};

const mapStateToProps = ({ info }) => {
  const placesList = info.bookmarkedPlaces;
  return {
    placesList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBookmarkedPlacesList: () => dispatch(getAllBookmarkPlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkScreen);
