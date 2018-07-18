import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Animated, Easing
} from "react-native";
import styles from "./styles";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/EvilIcons";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Actions } from "react-native-router-flux";
import { getDivisionList } from "../../store/actions";
import { themeColor } from "../../styles/globalStyles";
import LottieView from 'lottie-react-native';

class HomeScreen extends Component {
  handleViewRef = ref => (this.view = ref);
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
      divList: null
    };
  }

  componentDidMount() {
    this.props.getDivList();
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
    }).start();
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.divisionList !== prevState.divList) {
      return {
        divList: nextProps.divisionList
      };
    }
    return null;
  }

  renderDistrict = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => Actions.push("placeList_screen", { place_id: item.id })}
        key={item.id}
      >
        <Image 
          style={styles.imageStyle} 
          source={{uri: item.thumb}} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  renderList = () => {
    if(this.state.divList) {
      return (
        <FlatList
        data={this.state.divList}
        keyExtractor={this._keyExtractor}
        renderItem={({ item }) => this.renderDistrict({ item })}
      />
      )
    }
    return (
        <LottieView
          progress={this.state.progress}
          source={require('../../assets/spinner.json')}
        />
    );
  }
  _keyExtractor = (item, index) => item.id;
  render() {
    return (
      <View style={styles.container}>
        <View 
          style={styles.container}
        >
         {this.renderList()}
        </View>
        <ActionButton buttonColor={themeColor}>
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

const mapStateToProps = ({ info }) => {
  const divisionList = info.divisionList;
  return {
    divisionList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDivList: () => dispatch(getDivisionList())
  };
};

HomeScreen.propTypes = {
  divisionList: propTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
