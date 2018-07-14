import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/EvilIcons";
import { View, ScrollView } from "react-native";
import PlaceBox from "../../component/PlaceBox/PlaceBox";
import { getPlacesById } from "../../store/actions";
import styles from "./styles";
import { Actions } from "react-native-router-flux";

class PlaceListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeInfo: null
    };
  }
  componentDidMount() {
    const id = this.props.place_id;
    this.props.getPlacesList(id);
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
      console.log(this.state.placeInfo,'info');     
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
              id: eachPlace.id
            })
            }}  
          />
        );
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.listContainer}>{this.renderPlaceList()}</View>
        </ScrollView>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="#3498db"
            title="Bookmarks"
            onPress={() => {}}
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
  console.log(placesList,'single place')
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
