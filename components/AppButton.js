/* eslint-disable prettier/prettier */
import React from "react";
import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({onPress, title, buttonBackground, buttonText}) => (
  <TouchableOpacity onPress={onPress} style={buttonBackground}>
    <Text style={buttonText}>{title}</Text>
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
});

export default AppButton;
