import React from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import COLORS from '../consts/colors';

const AppButton = ({ title, onPress, color, style}) => {
  return (
      <Button
      style={style}
      color={color}
      mode="contained"
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  text: {
    alignContent:'center',
    color: COLORS.white,
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;