import React from "react";
import { View, Text, StyleSheet } from "react-native";

const InitialScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcomse to React Native!</Text>
      <Text style={styles.instructions}>To get started, edit App.js lol</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontFamily: "Rochester",
    color: "#000"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default InitialScreen;
