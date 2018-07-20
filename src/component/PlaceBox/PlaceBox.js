import React from "react";
import PropTypes from "prop-types";
import { View, Image, TouchableOpacity, Text } from "react-native";

import styles from "./styles";
import { activeOpacity } from "../../styles/globalStyles";

const PlaceBox = props => {
  const { name, imageUrls } = props.place;
  console.log(typeof props,'box');
  return (
    <TouchableOpacity 
      activeOpacity={activeOpacity} 
      onPress={props.onPress}
    >
      <View style={styles.container}>
        <Image source={{uri: imageUrls[0]}} style={styles.image} resizeMode={"cover"} />   
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

PlaceBox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onPress: PropTypes.func
};

export default PlaceBox;
